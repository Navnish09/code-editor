import React from "react";
import monacoThemes from "monaco-themes/themes/themelist.json";
import { Dropdown } from "baseComponents";

export const ThemeDropdown = ({ handleThemeChange, theme } : any) => {
  return (
    <Dropdown
      placeholder={`Select Theme`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropdown;
