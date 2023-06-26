import { FormEvent, ChangeEvent } from "react";
import QuestionType from "../types/question";

type QuestionFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  newQuestion: QuestionType;
};

export default function QuestionForm({
  handleSubmit,
  handleChange,
  newQuestion,
}: QuestionFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Question</label>
      <input
        type="text"
        name="question"
        onChange={handleChange}
        value={newQuestion.question}
      />
      <label>Answer</label>
      <input
        type="text"
        name="answer"
        onChange={handleChange}
        value={newQuestion.answer}
      />
      <button type="submit">Create Question</button>
    </form>
  );
}
