import apiUrls from "../configs/apiUrls.json";
import { createInternalServerAPIUrl } from "../utils/apiConfigs";

const userAPIEndpoints = apiUrls.user;


/**
 * Function to validate user 
 * @param email - email of the user
 * @returns Promise - Promise object represents the result of the validation
 */
export const validateUser = (email: string) : Promise<Record<string, any>> => {
  const url = createInternalServerAPIUrl(userAPIEndpoints.validateUser);
  
  const options = {
    method: "POST",
    body: JSON.stringify({ email }),
  };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async (res) => {
        const data: Record<string, any> = await res.json();

        if(!res.ok){
          return Promise.reject(data);
        }
        
        resolve(data);

      }).catch(reject);
  });
}

/**
 * Function to register a user
 * @param email - email of the user
 * @param password - password of the user 
 * @returns Promise - Promise object represents the result of the registration
 */
export const registerUser = (email: string, password: string) : Promise<Record<string, any>> => {
  const url = createInternalServerAPIUrl(userAPIEndpoints.registerUser);
  
  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
  };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async (res) => {
        const data: Record<string, any> = await res.json();

        if(!res.ok){
          return Promise.reject(data);
        }
        
        resolve(data);

      }).catch(reject);
  });
}

/**
 * Function to login a user
 * @param email - email of the user
 * @param password - password of the user
 * @returns Promise- Promise object represents the result of the login
 */
export const loginUser = (email: string, password: string) : Promise<Record<string, any>> => {
  const url = createInternalServerAPIUrl(userAPIEndpoints.loginUser);
  
  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
  };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async (res) => {
        const data: Record<string, any> = await res.json();

        if(!res.ok){
          return Promise.reject(data);
        }
        
        resolve(data);

      }).catch(reject);
  });
}