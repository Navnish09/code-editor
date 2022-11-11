import React, { useState } from "react";
import Editor from "@monaco-editor/react";

import { CodeEditorProps } from "../../models/EditorModel";

export const CodeEditor = ({ onChange, language, code, theme }: CodeEditorProps) => {
  const [value, setValue] = useState(code || "");
  
  const handleEditorChange = (value?: string) => {
    setValue(value || "");
    onChange(value);
  };

  return (
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
  );
};

export default CodeEditor;