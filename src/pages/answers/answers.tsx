import { useNavigate, useParams } from "react-router";
import AnswerBlockRenderer from "./answerBlockRenderer";
import { useThemeContext } from "../../theme/themeContext";

import { useFetchQuestionById } from "../../hooks/useFetchQuestionById";
import { ArrowLeft, Layers } from "lucide-react";
import {
  categoryGradient,
  difficultyColor,
} from "../../helpers/colors.helpers";

const QuestionDetail = () => {
  const { isDarkMode } = useThemeContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const { question } = useFetchQuestionById(id);

  if (!question || question.isActive === false) {
    return <div className="text-white p-10">Question not found</div>;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <button
        onClick={() => navigate(-1)}
        className="flex mb-6 cursor-pointer gap-0.5"
      >
        <ArrowLeft
          className={`${isDarkMode ? "text-gray-200" : "text-gray-900"} font-bold`}
        />
        <span
          className={`${isDarkMode ? "text-gray-200" : "text-gray-900"} font-semibold `}
        >
          Go Back
        </span>
      </button>
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
    </section>
  );
};

export default QuestionDetail;
