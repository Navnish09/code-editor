import React from "react";

import { Copy } from "assets/svgComponents/Copy";
import { Language } from "models";
import { SOLIDITY_COMPILATION_SUCCESS_MESSAGE, SOLIDITY_KEYS, SOLIDITY_LANG_VALUE } from "../constants";

interface Props {
  outputDetails: Record<string, any> | null;
  language: Language;
}

// ================================================================================================
// Component to display the success output of the code
const SuccessOutput = ({ output }: { output: string }) => {
  return (
    <pre className="px-2 py-1 font-normal text-xs text-emerald-500 whitespace-pre-line overflow-hidden">
      {output}
    </pre>
  )
}

// Component to display the error output of the code
const ErrorOutput = ({ output }: { output: string }) => {
  return (
    <pre className="px-2 py-1 font-normal text-xs text-red-500 whitespace-pre-line overflow-hidden">
      {output}
    </pre>
  )
}

//==================================================================================================
export const OutputWindow = ({ outputDetails, language }: Props) => {
  const isSolidity = language.value === SOLIDITY_LANG_VALUE;

  // Function to copy the abi and bytecode to the clipboard
  const handleCopy = (key: string) => {
    switch (key) {
      case SOLIDITY_KEYS.abi:
        navigator.clipboard.writeText(JSON.stringify(outputDetails?.abi) || "");
        break;

      case SOLIDITY_KEYS.bytecode:
        navigator.clipboard.writeText(JSON.stringify(outputDetails?.evm.bytecode) || "");
        break;
    }
  }

  // Function to handle the output of judge0 api
  const handleJudge0Output = () => {
    const statusId = outputDetails?.status?.id;

    // Handle judge0 api status codes
    if (statusId) {
      switch (statusId) {
        case 6:
          return <ErrorOutput output={window.atob(outputDetails?.compile_output)} />;

        case 3:
          return window.atob(outputDetails.stdout) !== null ?
            <SuccessOutput output={window.atob(outputDetails.stdout)} />
            : 'No standard output for this code'

        case 5:
          return <ErrorOutput output={`Time Limit Exceeded`} />

        default:
          return <ErrorOutput output={window.atob(outputDetails?.stderr)} />
      }
    }
  }

  // Function to handle the output of solidity compiler
  const handleSolidityOutput = () => {
    // Handle errors from solidity compiler
    if (outputDetails?.compilationStatus === "error") {
      const appendErrors = outputDetails?.errors.reduce((acc: string, error: any) => acc + error.formattedMessage + "\n", "");
      return <ErrorOutput output={appendErrors} />
    }

    if (outputDetails?.compilationStatus === "success") {
      return <SuccessOutput output={SOLIDITY_COMPILATION_SUCCESS_MESSAGE} />;
    }

    return "";
  }

  const getOutput = () => {
    // If the language is solidity, Show the output of solidity object
    if (isSolidity) return handleSolidityOutput();

    return handleJudge0Output();
  };

  return (
    <>
      <div className="flex justify-between items-center mb-1">
        <h1 className="font-bold text-lg bg-clip-text text-slate-400">
          Output
        </h1>
        {
          (
            outputDetails?.compilationStatus === "success" && language.value === SOLIDITY_LANG_VALUE
          ) &&
          <div className="text-slate-400 flex gap-2">
            <span
              onClick={() => handleCopy(SOLIDITY_KEYS.abi)}
              className="flex items-center gap-1 hover:bg-slate-800 px-2 cursor-pointer rounded-md active:bg-slate-900"
            >
              <Copy />
              Abi
            </span>
            <span
              onClick={() => handleCopy(SOLIDITY_KEYS.bytecode)}
              className="flex items-center gap-1 hover:bg-slate-800 px-2 cursor-pointer rounded-md active:bg-slate-900"
            >
              <Copy />
              Byte code
            </span>
          </div>
        }
      </div>

      <div className="w-full mb-3 h-56 bg-slate-800 rounded-md text-white font-normal text-sm overflow-y-auto">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};

export default OutputWindow;
