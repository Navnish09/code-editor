import axios, { AxiosRequestConfig } from "axios";
import { PropsForTokenAPI } from "../models/apiModels";
import apiUrls from "../configs/apiUrls.json";
import { createJudge0APIUrl } from "../utils/apiConfigs";
import Mustache from "mustache";

// Endpoints for judge0 api
const Judge0Endpoints = apiUrls.judge0;

/**
 * Fetch the token from the Judge0 API.
 * @param param0 Configurations for the request.
 * @returns Promise with the token.
 */
export const getToken = ({ language_id, source_code, stdin, } : PropsForTokenAPI) => {
  
  const options: AxiosRequestConfig = {
    method: "POST",
    url: createJudge0APIUrl(Judge0Endpoints.getToken),
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST || "",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
    },
    data: { language_id, source_code, stdin, },
  };

  return axios.request(options);
}


/**
 * Get submission details using the token.
 * @param token Token to fetch the result.
 * @returns Promise with the result.
 */
export const getSubmission = (token: string) => {
  const url = createJudge0APIUrl(Mustache.render(Judge0Endpoints.submission, { token }));

  const options: AxiosRequestConfig = {
    method: "GET",
    url,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST || "",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
    },
  };

  return axios.request(options);
}