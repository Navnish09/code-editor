import React from "react";
import languageOptions from "../configs/languageOptions.json";
import { Language } from "../models/LanguageModel";
import { Dropdown } from "../baseComponents/Dropdown";

interface Props {
  language: Language;
  onSelectChange: Function;
}

export const LanguagesDropdown = ({ language, onSelectChange }: Props) => {
  return (
    <Dropdown
      placeholder={`Filter By Category`}
      options={languageOptions}
      defaultValue={language}
      onChange={(selectedOption: any) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
