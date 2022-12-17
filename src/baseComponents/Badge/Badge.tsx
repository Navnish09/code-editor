import { PropsWithChildren } from "react"
import { BadgeProps } from "./model";

export const Badge = ({ children, onClick }: PropsWithChildren<BadgeProps>) => {
  return (
    <span
      onClick={onClick}
      className={`font-semibold px-2 py-1 rounded-md bg-slate-800 text-slate-400 ${onClick ? "cursor-pointer hover:bg-slate-700 transition" : ""}`}>
      {children}
    </span>
  )
}