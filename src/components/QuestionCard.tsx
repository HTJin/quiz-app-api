import { MouseEvent, Dispatch, SetStateAction } from "react";
import QuestionType from "../types/question";
import UserType from "../types/auth";
import { deleteQuestion } from "../lib/apiWrapper";

type QuestionCardProps = {
  question: QuestionType;
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  user: UserType | null;
};

export default function QuestionCard({
  question,
  update,
  setUpdate,
  user,
}: QuestionCardProps) {
  // const date = new Date(post.dateCreated as string)

  const handleDeleteClick = async (_: MouseEvent): Promise<void> => {
    const token = localStorage.getItem("token");
    deleteQuestion(question.id!, token!);
    setUpdate(!update);
  };

  return (
    <div className="mt-3">
      <div>
        <div>
          {question.id}. {question.question}
        </div>
        <div>{question.answer}</div>
        <div>
          By {question.author?.firstName} {question.author?.lastName}
        </div>
        <div>Date Created: {question.created_on}</div>
      </div>

      {question.author ===
      `${user?.firstName} ${user?.lastName}_${String(user?.user_id).padStart(
        4,
        "0"
      )}` ? (
        <button onClick={handleDeleteClick}>Delete Question</button>
      ) : null}
    </div>
  );
}
