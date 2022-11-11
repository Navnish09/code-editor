import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useKeyPress from "../hooks/useKeyPress";
import { defineTheme } from "../lib/defineTheme";
import languageOptions from "../configs/languageOptions.json";

import { Language } from "../models/LanguageModel";
import { getSubmission, getToken } from "../apis/judge0";
import { DEFAULT_CODE, DEFAULT_THEME, TOASTIFY_MESSAGES } from "../constants";
import { showErrorToast, showSuccessToast } from "../lib/toastifyHelpers";
import { CustomInput, OutputWindow, OutputDetails, CodeEditorWindow, LanguagesDropdown } from "../components";
import { compileSolidity } from "../apis/solidityCompilerApi";

const Landing = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [customInput, setCustomInput] = useState("Custom Inputs");
  const [outputDetails, setOutputDetails] = useState<Record<string, any> | null>(null);
  const [processing, setProcessing] = useState(false);
  const [theme] = useState(DEFAULT_THEME);
  const [language, setLanguage] = useState<Language>(languageOptions[11]);

  const ctrlPress = useKeyPress("Control");
  const enterPress = useKeyPress("Enter");

  // Hanlder for solidity compiler
  const handleSolidityCode = async () => {
      let res = await compileSolidity(code);
      setOutputDetails(res);
      showSuccessToast(TOASTIFY_MESSAGES.COMPILATION_SUCCESS);
      setProcessing(false);
  }


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
          setProcessing(false);
          setOutputDetails(response.data);
          showSuccessToast(TOASTIFY_MESSAGES.COMPILATION_SUCCESS);
          break;
      }
    } catch (err) {
      setProcessing(false);
    }
  };

  // Use Ctrl + Enter keypress to compile code
  useEffect(() => {
    (ctrlPress && enterPress) && handleCompile();
  }, [ctrlPress, enterPress]);

  // Define default theme for monaco editor
  useEffect(() => {
    defineTheme(DEFAULT_THEME.value);
  }, []);

  // Empty the output details when the language is changed
  useEffect(() => {
    setOutputDetails(null);
  }, [language.value]);


  return (
    <div className="bg-slate-900 pt-5 w-full">
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={(sl: Language) => setLanguage(sl)} language={language} />
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
            <button
              onClick={handleCompile}
              disabled={!code || processing}
              className={`mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-slate-800 text-slate-400 flex-shrink-0 ${!code ? "opacity-50" : ""}`}
            >
              {processing ? "Processing..." : "Run"}
            </button>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </div>
  );
  
};
export default Landing;
