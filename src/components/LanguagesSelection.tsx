import React from "react";

import { Dropdown } from "baseComponents";
import languageOptions from "configs/languageOptions.json";
import { Language } from "models";

interface Props {
  language: Language;
  onSelectChange: Function;
}

export const LanguagesDropdown = ({ language, onSelectChange }: Props) => {
  return (
    <Dropdown
      placeholder={`Filter By Category`}
      options={languageOptions}
      value={language}
      onChange={(selectedOption: any) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
