import { type FC } from "react";
import { Tag, Layers } from "lucide-react";
import type { Question } from "../../types/question";

const categoryGradient: Record<Question["category"], string> = {
  react: "from-blue-500 to-cyan-500",
  "react native": "from-purple-500 to-pink-500",
  javascript: "from-yellow-500 to-orange-500",
};

const difficultyColor: Record<Question["difficulty"], string> = {
  beginner: "text-green-400",
  intermediate: "text-yellow-400",
  advanced: "text-red-400",
};

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="relative group overflow-hidden  bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-100 via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-8 z-10">
        {/* Category */}
        <span
          className={`inline-block px-2 py-1 bg-linear-to-r ${
            categoryGradient[question.category]
          } text-white text-xs font-semibold rounded-full mb-6`}
        >
          {question.category.toUpperCase()}
        </span>

        {/* Question */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {question.question}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span className={difficultyColor[question.difficulty]}>
              {question.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{question.tags.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
