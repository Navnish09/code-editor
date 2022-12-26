import { Question } from "models/questionModel";
import Mustache from "mustache";

import apiUrls from "../configs/apiUrls.json";
import { createInternalServerAPIUrl } from "../utils/apiConfigs";

const questionsEndpoints = apiUrls.questions;

export const getQuestion = async (questionId: string): Promise<Question> => {
  const url = createInternalServerAPIUrl(Mustache.render(questionsEndpoints.getQuestion, { questionId }));

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(async (res) => {
        const data: Question = await res.json();

        if (!res.ok) {
          return Promise.reject(data);
        }

        resolve(data);
      })
      .catch(reject);
  });
}