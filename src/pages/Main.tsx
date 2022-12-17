import React, { useEffect, useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../lib/defineTheme";
import languageOptions from "../configs/languageOptions.json";

import { Language } from "../models/LanguageModel";
import { getSubmission, getToken } from "../apis/judge0";
import { DEFAULT_CODE, DEFAULT_THEME, TOASTIFY_MESSAGES } from "../constants";
import { showErrorToast, showSuccessToast } from "../lib/toastifyHelpers";
import { CustomInput, OutputWindow, OutputDetails, CodeEditorWindow, LanguagesDropdown } from "../components";
import { compileSolidity } from "../apis/solidityCompilerApi";
import { addNewSubmission } from "../apis/submissionApis";
import { Button } from "../baseComponents/Button";
import { UserContext } from "../contexts/userContext";
import { Badge } from "../baseComponents";

export const Main = () => {
  const { user, logout } = useContext(UserContext);
  console.log(user);
  const [code, setCode] = useState(DEFAULT_CODE);
  const [validCode, setValidCode] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState<Record<string, any> | null>(null);
  const [processing, setProcessing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [userName, setUserName] = useState("");

  const [theme] = useState(DEFAULT_THEME);
  const [language, setLanguage] = useState<Language>(languageOptions[11]);

  const resetStates = () => {
    setCustomInput("");
    setOutputDetails(null);
    setProcessing(false);
    setSubmitting(false);
  };

  // Hanlder for solidity compiler
  const handleSolidityCode = async () => {
    let res = await compileSolidity(code);
    setOutputDetails(res);
    showSuccessToast(TOASTIFY_MESSAGES.COMPILATION_SUCCESS);
    setProcessing(false);
  }

  /**
   * Compile code and get token
   */
  const handleCompile = async () => {
    setProcessing(true);

    // Use the solidity compiler api if the language is Solidity
    if (language.value === "sol") {
      handleSolidityCode();
      return;
    }

    try {
      // Get token from judge0 
      const res = await getToken({
        language_id: language.id,
        source_code: window.btoa(code),
        stdin: window.btoa(customInput),
      })

      // Use token to get submission from judge0
      checkStatus(res.data.token);

    } catch (err: any) {
      // get error status
      const status = err.response.status;

      switch (status) {
        case 429:
          showErrorToast(TOASTIFY_MESSAGES.QUOTA_EXCEEDED);
          break;
      }

      setProcessing(false);
    }
  };

  /**
   * Get code submission status
   * @param token token from judge0
   */
  const checkStatus = async (token: string) => {
    try {
      const response = await getSubmission(token);
      const statusId = response.data.status?.id;

      // Processed - we have a result
      switch (statusId) {
        case 1:
        case 2:
          // Again check status after 2 second
          setTimeout(() => { checkStatus(token); }, 2000);
          break;

        default:
          if (response.data.status?.description === "Accepted") {
            setValidCode(code);
          } else {
            setValidCode("");
          }

          setProcessing(false);
          setOutputDetails(response.data);
          showSuccessToast(TOASTIFY_MESSAGES.COMPILATION_SUCCESS);
          break;
      }
    } catch (err) {
      setProcessing(false);
    }
  };

  /**
   * Submit code to internal database
   */
  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      await addNewSubmission({
        language: language.value,
        code: code,
        email: user.email
      })

      resetStates();
      showSuccessToast(TOASTIFY_MESSAGES.SUBMISSION_SUCCESS);

    } catch (error: any) {
      setSubmitting(false);
      showErrorToast(error.message);
    }
  }

  // Define default theme for monaco editor
  useEffect(() => {
    defineTheme(DEFAULT_THEME.value);
  }, []);

  // Empty the output details when the language is changed
  useEffect(() => {
    setOutputDetails(null);
  }, [language.value]);


  return (
    <div className="bg-slate-900 pt-5 w-full h-full">
      <div className="flex flex-row justify-between">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={(sl: Language) => setLanguage(sl)} language={language} />
        </div>
        <div className="pr-4 pl-4 flex items-center">
          <div className="text-slate-500 flex px-2 items-center outline-slate-800 font-normal text-md outline-1">
            <span className="text-slate-400 font-medium">User :</span>
            <div className="flex gap-2 items-center">
              <span className="px-1 text-slate-500">{user.email}</span>
              <Badge onClick={logout}>Logout</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col h-full w-full justify-start items-end">
          <CodeEditorWindow
            code={code}
            onChange={(newCode: string) => setCode(newCode)}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        <div className="right-container flex flex-shrink-0 w-[29%] flex-col">
          <OutputWindow outputDetails={outputDetails} language={language} />
          <div className="flex flex-col items-end">
            <CustomInput
              onChange={(value: string) => setCustomInput(value)}
            />
            <div className="flex gap-4">

              <Button
                onClick={handleCompile}
                disabled={!code || processing || submitting}
                className="mt-4"
              >
                {processing ? "Processing..." : "Run"}
              </Button>

              {
                (
                  (outputDetails?.status?.description === "Accepted" && code) && (validCode === code)
                ) && (
                  <Button
                    onClick={handleSubmit}
                    type="success"
                    disabled={processing || submitting}
                    className="mt-4"
                  >
                    {!submitting ? "Submit Code" : "Submitting"}
                  </Button>
                )
              }
            </div>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </div>
  );

};
export default Main;