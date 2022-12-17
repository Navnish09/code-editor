import { PropsWithChildren } from "react"
import { ButtonProps } from "./model"

export const Button = ({
  type = "primary",
  onClick,
  disabled,
  className,
  children,
  loading,
} : PropsWithChildren<ButtonProps>) => {

  const buttonTypeClasses = {
    "primary": "bg-slate-800 text-slate-300 border-black",
    "secondary": "bg-slate-900 border-slate-700 shadow-slate-700 text-slate-300 shadow-[4px_4px_0px_0px_rgba(0,0,0)]",
    "danger": "bg-red-700 text-red-100 border-black",
    "success": "bg-emerald-700 text-emerald-100 border-black",
  }

  const disableStateClasses = (!!disabled || !!loading) ? "cursor-not-allowed opacity-50" : "hover:shadow"
  
  return (
    <button
      onClick={onClick}
      disabled={!!disabled || !!loading}
      className={`border-2 z-10 outline-none cursor-pointer rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2  transition duration-200 font-normal flex-shrink-0 ${className} ${buttonTypeClasses[type]} ${disableStateClasses}`}
    >
      {children}
    </button>
  )
}