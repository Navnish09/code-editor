
// Function to build the API URL
export const createJudge0APIUrl = (endpoint: string) => {
  return `${process.env.REACT_APP_RAPID_API_URL}${endpoint}`;
}

// Function to build solidty compiler API URL
export const createInternalServerAPIUrl = (endpoint: string) => {
  return `${process.env.REACT_APP_INTERNAL_SERVER_URL}${endpoint}`;
}