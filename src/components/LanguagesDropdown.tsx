import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { languageOptions } from "../constants/languageOptions";

const LanguagesDropdown = ({ language, onSelectChange } : any) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={language}
      onChange={(selectedOption : any) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
