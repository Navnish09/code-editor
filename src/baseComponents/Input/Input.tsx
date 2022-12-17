import { ForwardedRef, forwardRef } from "react"
import { InputProps } from "./model"


export const Input = forwardRef(({
  type = "text",
  label,
  value,
  error,
  onChange,
  placeholder,
  ...props
}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const validationClass = error ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-slate-500"

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        {
          label &&
          <label className="block tracking-wide text-slate-400 text-xs font-medium mb-2">
            {label}
          </label>
        }
        <div className="mb-2">
          <input
            {...props}
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`appearance-none block w-full bg-slate-800 text-slate-400 placeholder:text-slate-600 placeholder:font-medium font-regular border ${validationClass} shadow outline-none rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-slate-900`}
          />

          {
            error &&
            <p className="text-xs text-red-500 font-medium dark:text-red-500">
              {error}
            </p>
          }
        </div>
      </div>
    </div>
  )
})