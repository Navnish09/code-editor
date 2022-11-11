import { toast } from "react-toastify";
import { TOASTIFY_MESSAGES } from "../constants";

/**
 * Toatifys a success message
 * @param msg Message to be displayed
 */
export const showSuccessToast = (msg: string) => {
  toast.success(msg || TOASTIFY_MESSAGES.COMPILATION_SUCCESS, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

/**
 * Toatifys an error message
 * @param msg Message to be displayed
 * @param timer Time in ms for which the toast should be displayed 
 */
export const showErrorToast = (msg: string, timer: number = 1000) => {
  toast.error(msg || TOASTIFY_MESSAGES.COMPILATION_ERROR, {
    position: "top-right",
    autoClose: timer,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
