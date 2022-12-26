import { ReactNode, SetStateAction } from "react";
import { ButtonProps } from "../Button";


export interface FooterButton extends ButtonProps {
  text: string
}

export interface ModalProps {
  title?: string;
  description?: string;
  open: boolean;
  content: ReactNode;
  footerButtons?: Array<FooterButton>;
  toggleModal?: (state :SetStateAction<boolean>) => void;
  blurOverlay?: boolean;
  size?: string;
}