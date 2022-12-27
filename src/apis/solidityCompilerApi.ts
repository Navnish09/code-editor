import apiUrls from "../configs/apiUrls.json";
import { createInternalServerAPIUrl } from "../utils/apiConfigs";
import { authWrapper } from "./authWrapper";

const solidityCompilerApi = apiUrls.solidityCompiler; 

/**
 * 
 * @param code Code to compile
 * @returns Fetch Promise with the json response
 */
export const compileSolidity = (code : string) => {
  const url = createInternalServerAPIUrl(solidityCompilerApi.compile);

  const options = {
    method: "POST",
    body: JSON.stringify({ code }),
  };

  return authWrapper<Record<string, any>>(url, options);
}