import React from "react";

import { CodeEditorProps } from "../models/EditorModel";
import {CodeEditor} from "../baseComponents/CodeEditor/CodeEditor";

export const CodeEditorWindow = (props: CodeEditorProps) => {
  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-md shadow-slate-900 opacity-100 text-slate-400">
      <CodeEditor {...props} />
    </div>
  );
};
export default CodeEditorWindow;
