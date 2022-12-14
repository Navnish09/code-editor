import React from "react";
import { CodeEditorProps, CodeEditor } from "baseComponents";

export const CodeEditorWindow = (props: CodeEditorProps) => {
  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-md shadow-slate-900 opacity-100 text-slate-400">
      <CodeEditor {...props} />
    </div>
  );
};
export default CodeEditorWindow;
