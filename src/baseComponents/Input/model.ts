import { ChangeEventHandler } from "react";

export interface InputProps {
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
  autoFocus?: boolean
}