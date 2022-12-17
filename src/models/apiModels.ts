// Judge0 API models
export interface PropsForTokenAPI {
  language_id: number,
  source_code: string,
  stdin: string
}


// Submission API models
export interface SubmissionPayload {
  code: string;
  email: string;
  language: string;
}

