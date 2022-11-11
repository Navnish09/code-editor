import apiUrls from "../configs/apiUrls.json";
import { createSolidityCompilerAPIUrl } from "../utils/apiConfigs";

const solidityCompilerApi = apiUrls.solidityCompiler; 

export const compileSolidity = (code : string) => {
  const url = createSolidityCompilerAPIUrl(solidityCompilerApi.compile);

  const options = {
    method: "POST",
    body: JSON.stringify({ code }),
  };

  return fetch(url, options).then((res) => res.json());
}