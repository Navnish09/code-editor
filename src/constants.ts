
export const DEFAULT_LANGUAGE_ID = 54;

// Default code to ne used in the editor.
export const DEFAULT_CODE = `// Program to print half pyramid using

#include <iostream>
using namespace std;

int main(){
  int rows = 5;
  for(int i = 1; i <= rows; ++i) {
    for(int j = 1; j <= i; ++j) {
      cout << "* ";
    }
    cout << "\\n";
  }
  return 0;
}`;

export const DEFAULT_THEME = { value: "blackboard", label: "Blackboard" };

export const DEFAULT_NAME_VALUE = "who is coding?"

export const SOLIDITY_LANG_VALUE = "sol";

// Toastify messages
export const TOASTIFY_MESSAGES = {
  COMPILATION_SUCCESS: `Compiled Successfully!`,
  COMPILATION_ERROR: `Something went wrong! Please try again.`,
  QUOTA_EXCEEDED: `Requests quota has been exceeded for the Day!`,
  SUBMISSION_SUCCESS: `Submission Successfully!`,
}

export const SOLIDITY_KEYS = {
  abi : "abi",
  bytecode : "bytecode",
}

export const CUSTOM_INPUT_INTSRUCTION = "Pass inputs in expected squence with single space in between.e.g. 10 20" 

export const SOLIDITY_COMPILATION_SUCCESS_MESSAGE = "Compilation Successful. You can copy the ABI and Bytecode from the above panel.";

export const LOGIN_BUTTON_STATES = {
  validate : "validate",
  register : "register",
  login : "login",
};

export const LOGIN_BUTTON_TEXTS = {
  validate : "Submit",
  register : "Register",
  login : "Login",
}

export const TEXT_CONTENT = {
  loadingQuestion: "Loading Question...",
  userDetailsModalTitle : "User Details",
  userDetailsModalDescription: "Enter your email to register yourself.",
}

export const SIZE_MAP = {
  max : "max-content",
  min : "min-content",
  xs: "20rem",
  sm: "28rem",
  md: "36rem",
  lg: "42rem",
  xl: "56rem",
  "2xl": "72rem",
  full : "100%",
};