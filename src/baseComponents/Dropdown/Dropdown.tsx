import React from "react";
import Select, { GroupBase, Props } from "react-select";
import { customStyles } from "./customDropdownStyles";

export const Dropdown = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
  >(props: Props<Option, IsMulti, Group>) => {
  return (
    <Select
      {...props}
      styles={customStyles}
    />
  );
};

export default Dropdown;
