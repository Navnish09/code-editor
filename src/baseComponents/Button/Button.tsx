import { PropsWithChildren } from "react"
import { ButtonProps } from "./model"

export const Button = ({
  onClick,
  disabled,
  className,
  children,
} : PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-slate-800 text-slate-400 font-normal flex-shrink-0 ${className}`}
    >
      {children}
    </button>
  )
}