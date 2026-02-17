import { Link } from "react-router";
import QuestionCard from "./questionCard";
import { useThemeContext } from "../../theme/themeContext";

import { useFetchQuestions } from "../../hooks/useFetchQuestions";
import { useState } from "react";
import type { Question } from "../../types/question";
import CustomSelect from "../../common/customSelect";

const QuestionList = () => {
  const { isDarkMode } = useThemeContext();
  const { questions } = useFetchQuestions();
  const [category, setCategory] = useState<Question["category"]>("");
  const [difficulty, setDifficulty] = useState<Question["difficulty"]>("");

  return (
    <section className={`max-w-7xl mx-auto px-6 py-30 `}>
      <div className="flex justify-between items-center">
        <h2
          className={`text-4xl font-bold ${isDarkMode ? "text-gray-200" : "text-gray-900"} mb-12`}
        >
          Interview Questions
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <CustomSelect
            selectedOption={category}
            onClickOption={setCategory}
            label="Select category"
            options={["javascript", "react", "react native"]}
          />

          <CustomSelect
            selectedOption={difficulty}
            onClickOption={setDifficulty}
            label="Select difficulty"
            options={["beginner", "intermediate", "advanced"]}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {questions
          .filter((q) => q.isActive !== false)
          .map((q) => (
            <Link to={`/question/${q.id}`} key={q.id}>
              <QuestionCard key={q.id} question={q} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default QuestionList;
