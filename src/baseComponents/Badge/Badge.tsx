import { PropsWithChildren } from "react"

export const Badge = ({children} : PropsWithChildren) => {
  return (
    <span className="font-semibold px-2 py-1 rounded-md bg-slate-800">
      {children}
    </span>
  )
}