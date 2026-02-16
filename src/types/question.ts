import type { Timestamp } from "firebase/firestore";
import type { AnswerBlock } from "./answer";

export type QuestionCategory = "react" | "react native" | "javascript";

export type QuestionDifficulty = "beginner" | "intermediate" | "advanced";

export interface Question {
  id: string;
  category: QuestionCategory;
  question: string;
  answer: AnswerBlock[];
  difficulty: QuestionDifficulty;
  tags: string[];
  isActive?: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}
