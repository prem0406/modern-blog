import type { Question } from "../../types/question";
import { useThemeContext } from "../../theme/themeContext";
import {
  categoryGradient,
  difficultyColor,
} from "../../helpers/colors.helpers";
import { Layers } from "lucide-react";
import AnswerBlockRenderer from "./answerBlockRenderer";

const ArticleDetail = ({ question }: { question: Question }) => {
  const { isDarkMode } = useThemeContext();
  return (
    <>
      <div className="mb-12">
        <span
          className={`inline-block px-2 py-1 bg-linear-to-r ${
            categoryGradient[question.category]
          } ${isDarkMode ? "text-gray-200" : "text-white"} text-sm font-semibold rounded-full mb-1`}
        >
          {question.category.toUpperCase()}
        </span>

        <h1
          className={`text-4xl font-bold ${isDarkMode ? "text-gray-200" : "text-grey-900"}  leading-tight`}
        >
          {question.question}
        </h1>

        <div className="mt-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-gray-300" />
          <span className={difficultyColor[question.difficulty]}>
            {question.difficulty}
          </span>
        </div>
      </div>

      {/* Answer */}
      <article className="shadow-xl rounded-2xl p-2 md:p-10">
        {question.answer.map((block) => (
          <AnswerBlockRenderer key={block.id} block={block} />
        ))}
      </article>
    </>
  );
};

export default ArticleDetail;
