
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getQuestion } from "apis";
import { Modal } from "baseComponents";
import { Question } from "models";
import { showErrorToast } from "lib";
import { TEXT_CONTENT } from "../constants";
import Main from "./Main";

export const MainWrapper = () => {
  const { questionId } = useParams();
  const [questionIdState] = useState(questionId);
  const [questionDetails, setQuestionDetails] = useState<Question | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch question details if questionId is present in the url
  useEffect(() => {
    if (questionIdState) {
      const fetchQuestion = async () => {
        setLoading(true);
        try {
          const question = await getQuestion(questionIdState);
          setQuestionDetails(question);

        } catch (error: any) {
          showErrorToast(error.message);
        } finally {
          setLoading(false);
        }
      }

      fetchQuestion()
    } else {
      setLoading(false);
    }
  }, [questionIdState]);

  return (
    <>
      <Modal
        open={loading}
        size="max"
        content={
          <div className="flex flex-col items-center justify-center">
            <div className="text-md font-regular text-white">{TEXT_CONTENT.loadingQuestion}</div>
          </div>
        }
      />
      <Main questionDetails={questionDetails} />
    </>
  )
}

export default memo(MainWrapper);