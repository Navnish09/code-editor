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

export const SOLIDITY_LANG_VALUE = "sol";

// Toastify messages
export const TOASTIFY_MESSAGES = {
  COMPILATION_SUCCESS: `Compiled Successfully!`,
  COMPILATION_ERROR: `Something went wrong! Please try again.`,
  QUOTA_EXCEEDED: `Requests quota has been exceeded for the Day!`,
}

export const SOLIDITY_KEYS = {
  abi : "abi",
  bytecode : "bytecode",
}

export const SOLIDITY_COMPILATION_SUCCESS_MESSAGE = "Compilation Successful. You can copy the ABI and Bytecode from the above panel.";