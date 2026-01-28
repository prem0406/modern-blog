import { useParams } from "react-router";
import { questions } from "../../data/question";
import AnswerBlockRenderer from "./answerBlockRenderer";
import { useThemeContext } from "../../theme/themeContext";

const QuestionDetail = () => {
  const { isDarkMode } = useThemeContext();
  const { id } = useParams();
  const question = questions.find((q) => q.id === Number(id));

  if (!question || question.isActive === false) {
    return <div className="text-white p-10">Question not found</div>;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4">
          {question.category.toUpperCase()}
        </span>

        <h1
          className={`text-4xl font-bold ${isDarkMode ? "text-gray-200" : "text-grey-900"}  leading-tight`}
        >
          {question.question}
        </h1>

        <div className="mt-4 text-sm text-gray-400">
          Difficulty:{" "}
          <span className="text-white text-xs font-bold bg-orange-400 border-solid rounded-sm p-1">
            {question.difficulty.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Answer */}
      <article className="shadow-xl rounded-2xl p-10">
        {question.answer.map((block) => (
          <AnswerBlockRenderer key={block.id} block={block} />
        ))}
      </article>
    </section>
  );
};

export default QuestionDetail;
