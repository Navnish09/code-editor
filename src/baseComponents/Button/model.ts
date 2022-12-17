import { MouseEventHandler } from "react";

export type ButtonTypes = "primary" | "secondary" | "danger" | "success"; 

export interface ButtonProps {
  type?: ButtonTypes;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}