export type QuestionCategory =
  | "react"
  | "react native"
  | "javascript";

export type QuestionDifficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export interface Question {
  id: number;
  category: QuestionCategory;
  question: string;
  answer: string;
  difficulty: QuestionDifficulty;
  tags: string[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
