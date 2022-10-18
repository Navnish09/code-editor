import React, { useState } from "react";

import Editor, { Monaco } from "@monaco-editor/react";

interface CodeEditorProps {
  onChange: Function;
  language: string;
  code: string;
  theme: string
}

const CodeEditorWindow = ({ onChange, language, code, theme }: CodeEditorProps) => {
  const [value, setValue] = useState(code || "");
  const [loading, setLoading] = useState(true);

  const handleEditorChange = (value?: string) => {
    setValue(value || "");
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-md shadow-slate-900 opacity-100 text-slate-400">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onMount={() => setLoading(false)}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
