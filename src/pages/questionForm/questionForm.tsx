import { useState } from "react";

import AnswerBlockEditor from "./answerBlock";
import type { Question } from "../../types/question";
import type { AnswerBlock } from "../../types/answer";
import { createQuestion } from "../../firebase/firestore.util";
import { useThemeContext } from "../../theme/themeContext";
import ArticleDetail from "../answers/articleDetail";

const QuestionForm = () => {
  const [questionText, setQuestionText] = useState("");
  const [category, setCategory] = useState<Question["category"]>("react");
  const [difficulty, setDifficulty] =
    useState<Question["difficulty"]>("beginner");
  const [tags, setTags] = useState("");
  const [blocks, setBlocks] = useState<AnswerBlock[]>([]);

  const addBlock = (type: AnswerBlock["type"]) => {
    const id = crypto.randomUUID();

    const newBlock: AnswerBlock =
      type === "heading"
        ? { id, type, level: 2, text: "" }
        : type === "paragraph"
          ? { id, type, text: "" }
          : type === "list"
            ? { id, type, items: [""] }
            : type === "code"
              ? { id, type, language: "tsx", code: "" }
              : { id, type, text: "" };

    setBlocks((prev) => [...prev, newBlock]);
  };

  const updateBlock = (updated: AnswerBlock) => {
    setBlocks((prev) =>
      prev.map((block) => (block.id === updated.id ? updated : block)),
    );
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleSubmit = async () => {
    const question: Omit<Question, "createdAt" | "updatedAt"> = {
      id: Date.now().toString(),
      category,
      question: questionText,
      difficulty,
      tags: tags.split(",").map((t) => t.trim()),
      answer: blocks,
      isActive: true,
    };

    await createQuestion(question);
    alert("Saved successfully");
  };

  const { isDarkMode } = useThemeContext();

  return (
    <div
      className={`max-w-4xl lg:max-w-full mx-auto p-8 py-32  min-h-screen lg:flex lg:gap-x-8   lg:justify-evenly`}
    >
      <div
        className={`${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-2xl p-8 space-y-6`}
      >
        <h2
          className={`text-2xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
        >
          Create Question
        </h2>

        <input
          className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
          placeholder="Enter question title"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            className={`border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
            value={category}
            onChange={(e) => setCategory(e.target.value as never)}
          >
            <option value="react">React</option>
            <option value="react native">React Native</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
          </select>

          <select
            className={`border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as never)}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <input
          className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="flex flex-wrap gap-2 pt-4 border-t">
          {["heading", "paragraph", "list", "code", "note"].map((type) => (
            <button
              key={type}
              onClick={() => addBlock(type as AnswerBlock["type"])}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add {type}
            </button>
          ))}
        </div>

        <div className="space-y-6 pt-4">
          {blocks.map((block) => (
            <AnswerBlockEditor
              key={block.id}
              block={block}
              onChange={updateBlock}
              onDelete={() => removeBlock(block.id)}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium"
        >
          Save Question
        </button>
      </div>
      {true && (
        // <div
        //   className={`${isDarkMode ? "bg-gray-800" : "bg-white"} p-8 flex-2 rounded-2xl`}
        // >
        <div className={`flex-2`}>
          <ArticleDetail
            question={{
              id: "",
              category,
              question: questionText,
              difficulty,
              tags: tags.split(",").map((t) => t.trim()),
              answer: blocks,
              isActive: true,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
