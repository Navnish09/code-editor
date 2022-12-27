import { Badge } from "baseComponents/Badge";
import { Modal } from "baseComponents/Modal";
import { Question } from "models/questionModel"
import { useState } from "react";


export const QuestionDetails = ({ question }: { question: Question | null }) => {
  const [isOpen, setIsOpen] = useState(false);


  const Content = () => (
    <div className="flex flex-col justify-center gap-5">
      <div>
        <div className="text-lg font-regular text-slate-300">{question?.question}</div>
        <p className="text-slate-600 font-medium mt-2 text-xs">Due date: <Badge>{question?.dueDate} </Badge></p>
      </div>
      {question?.description && (
        <div className="text-md text-slate-500">{question?.description}</div>
      )}
    </div>
  )


  return (
    <>
      <Modal
        open={isOpen}
        size="lg"
        content={<Content />}
        toggleModal={setIsOpen}
      />
      <span
        className="text-slate-500 cursor-pointer font-medium underline hover:text-slate-600"
        onClick={() => setIsOpen(true)}>
        View Question
      </span>
    </>

  )
}

export default QuestionDetails;