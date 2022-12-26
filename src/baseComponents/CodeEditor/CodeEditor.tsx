import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { CodeEditorProps } from "./model";

export const CodeEditor = ({ onChange, language, code, theme }: CodeEditorProps) => {
  const [value, setValue] = useState("");

  const handleEditorChange = (value?: string) => {
    setValue(value || "");
    onChange(value);
  };

  useEffect(() => {
    setValue(code || "");
  }, [code]);

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