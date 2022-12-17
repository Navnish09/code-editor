import React, { useState } from "react";
import { CUSTOM_INPUT_INTSRUCTION } from "../constants";

interface CustomInputProps{
  onChange : Function
}

export const CustomInput = ({onChange} : CustomInputProps) => {
  const [value, setValue] = useState("");
  
  return (
    <>
      <textarea
        rows={5}
        placeholder="Enter Custom Inputs"
        spellCheck={false}
        onChange={(e) => {
          onChange?.(e.target.value);
          setValue(e.target.value)
        }}
        value={value}
        className="focus:outline-none w-full border-2 placeholder:text-slate-700 border-slate-800 z-10 rounded-md px-4 py-2 hover:shadow transition duration-200 bg-slate-900 focus:border-slate-700 mt-2 text-slate-500 font-medium min-h-[100px] max-h-[300px] overflow-y-auto"
      ></textarea>

      <span className="text-slate-500 font-normal text-xs pt-2">
        {CUSTOM_INPUT_INTSRUCTION}
      </span>
    </>
  );
};

export default CustomInput;
