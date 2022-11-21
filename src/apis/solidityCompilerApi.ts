import apiUrls from "../configs/apiUrls.json";
import { createInternalServerAPIUrl } from "../utils/apiConfigs";

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

  return fetch(url, options).then((res) => res.json());
}