
// Function to build the API URL
export const createJudge0APIUrl = (endpoint: string) => {
  return `${process.env.REACT_APP_RAPID_API_URL}${endpoint}`;
}

// Function to build solidty compiler API URL
export const createSolidityCompilerAPIUrl = (endpoint: string) => {
  return `${process.env.REACT_APP_SOLIDITY_COMPILER_URL}${endpoint}`;
}