import React, { useState } from "react";
import { classnames } from "../utils/general";

interface CustomInputProps{
  onChange : Function
}

const CustomInput = ({onChange} : CustomInputProps) => {
  const [value, setValue] = useState("");
  
  return (
    <>
      <textarea
        rows={5}
        placeholder="Enter Custom Inputs"
        onChange={(e) => {
          onChange?.(e.target.value);
          setValue(e.target.value)
        }}
        value={value}
        className={classnames(
          "focus:outline-none w-full border-2 border-black z-10 rounded-md px-4 py-2 hover:shadow transition duration-200 bg-slate-700 mt-2 text-slate-500 font-medium"
        )}
      ></textarea>
    </>
  );
};

export default CustomInput;
