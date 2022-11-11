import { loader } from "@monaco-editor/react";
import monacoThemes from "monaco-themes/themes/themelist.json";

export const defineTheme = (theme: string) => {
  Promise.all([
    loader.init(),
    import(`monaco-themes/themes/${(monacoThemes as any)[theme]}.json`),
  ]).then(([monaco, themeData]) => {
    monaco.editor.defineTheme(theme, themeData);
  });
};

export default defineTheme;
