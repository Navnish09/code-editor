import { MouseEventHandler } from "react";

export interface ButtonProps {
  onClick: MouseEventHandler;
  disabled: boolean;
  className: string;
}