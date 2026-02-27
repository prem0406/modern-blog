import { useNavigate, useParams } from "react-router";
import { useThemeContext } from "../../theme/themeContext";

import { useFetchQuestionById } from "../../hooks/useFetchQuestionById";
import { ArrowLeft } from "lucide-react";
import ArticleDetail from "./articleDetail";

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
      <ArticleDetail question={question} />
    </section>
  );
};

export default QuestionDetail;
