import React from "react";
import { inlineEditProps } from "./model";

export const InlineEdit = ({ value, onChange, placeholder = "", width = "25ch" }: inlineEditProps) => {
  const [show, setShow] = React.useState(true);

  const blurHandler = () => {
    setShow(true);
  };

  return (
    <div className="mx-2" style={{ width }}>
      {show ? (
        <p
          style={{ width }}
          onClick={() => setShow(false)}
          className="bg-transparent px-1 text-inherit hover:bg-slate-800 transition cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap">
          {value || placeholder}
        </p>
      ) : (
        <input
          autoFocus
          className="bg-transparent border-none outline-1 outline-slate-400 px-1 w-full"
          type="text"
          onBlur={blurHandler}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      )}
    </div>
  );
}