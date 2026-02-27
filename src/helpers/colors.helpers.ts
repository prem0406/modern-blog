import type { Question } from "../types/question";

export const difficultyColor: Record<Question["difficulty"], string> = {
  beginner: "text-green-400",
  intermediate: "text-yellow-400",
  advanced: "text-red-400",
};

export const categoryGradient: Record<Question["category"], string> = {
  react: "from-blue-500 to-cyan-500",
  "react native": "from-purple-500 to-pink-500",
  javascript: "from-yellow-500 to-orange-500",
  java: "from-blue-500 to-cyan-400",
};
