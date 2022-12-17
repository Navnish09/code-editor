
import apiUrls from "../configs/apiUrls.json";
import { SubmissionPayload } from "../models/apiModels";
import { createInternalServerAPIUrl } from "../utils/apiConfigs";
import { authWrapper } from "./authWrapper";

const submissionEndpoints = apiUrls.submissions;

/**
 * 
 * @param payload Payload to container submission details
 * @returns Fetch Promise with the json response
 */
export const addNewSubmission = (payload: SubmissionPayload) => {
  const url = createInternalServerAPIUrl(submissionEndpoints.addSubmission);

  const options = {
    method: "POST",
    body: JSON.stringify(payload),
  };

  return authWrapper(url, options)
}