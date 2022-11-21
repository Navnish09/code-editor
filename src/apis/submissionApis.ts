
import apiUrls from "../configs/apiUrls.json";
import { SubmissionPayload } from "../models/SubmissionModel";
import { createInternalServerAPIUrl } from "../utils/apiConfigs";

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

  return fetch(url, options).then((res) => res.json());
}