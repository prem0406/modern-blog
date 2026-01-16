import Header from "../../home/header";
import type { Question } from "../../types/question";
import QuestionCard from "./questionCard";

const questions: Question[] = [
  {
    id: 1,
    category: "react",
    question: "Context API vs Redux, which do you prefer and why?",
    answer: "",
    difficulty: "intermediate",
    tags: ["state-management", "context-api", "redux"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 2,
    category: "react",
    question: "What is prop drilling? How can we avoid it?",
    answer: "",
    difficulty: "beginner",
    tags: ["props", "component-communication"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 3,
    category: "react native",
    question: "Explain React Native architecture.",
    answer: "",
    difficulty: "advanced",
    tags: ["architecture", "bridge", "fabric", "jsi"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 4,
    category: "javascript",
    question: "Shallow copy vs deep copy.",
    answer: "",
    difficulty: "intermediate",
    tags: ["objects", "memory"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 5,
    category: "javascript",
    question: "Explain closure in JavaScript.",
    answer: "",
    difficulty: "intermediate",
    tags: ["closure", "scope"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 6,
    category: "react native",
    question: "Did you work on CI/CD for deploying React Native applications?",
    answer: "",
    difficulty: "advanced",
    tags: ["ci-cd", "deployment", "automation"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 7,
    category: "react",
    question: "Explain React lifecycle.",
    answer: "",
    difficulty: "intermediate",
    tags: ["lifecycle", "hooks"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 8,
    category: "react native",
    question: "Did you work on making the application secure?",
    answer: "",
    difficulty: "advanced",
    tags: ["security", "authentication", "authorization"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 9,
    category: "react native",
    question: "Explain deep linking.",
    answer: "",
    difficulty: "intermediate",
    tags: ["navigation", "deep-linking"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 10,
    category: "react",
    question: "Explain React.memo, useMemo, and useCallback.",
    answer: "",
    difficulty: "intermediate",
    tags: ["performance", "memoization"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 11,
    category: "react native",
    question: "Name five hooks in React Native.",
    answer: "",
    difficulty: "beginner",
    tags: ["hooks"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 12,
    category: "javascript",
    question:
      "Is JavaScript asynchronous? If not, how does it handle asynchronous code?",
    answer: "",
    difficulty: "intermediate",
    tags: ["async", "single-threaded"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 13,
    category: "javascript",
    question: "What is the event loop?",
    answer: "",
    difficulty: "advanced",
    tags: ["event-loop", "concurrency"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 14,
    category: "javascript",
    question: "Difference between var, let, and const.",
    answer: "",
    difficulty: "beginner",
    tags: ["variables", "scope"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 15,
    category: "javascript",
    question:
      "Difference between arrow function and normal function. How does the this keyword work in both?",
    answer: "",
    difficulty: "intermediate",
    tags: ["functions", "this"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 16,
    category: "react",
    question: "What is Virtual DOM?",
    answer: "",
    difficulty: "beginner",
    tags: ["virtual-dom", "reconciliation"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 17,
    category: "react native",
    question: "What is the main bottleneck in React Native?",
    answer: "",
    difficulty: "advanced",
    tags: ["performance", "bridge"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 18,
    category: "react native",
    question: "Did you work on native modules?",
    answer: "",
    difficulty: "advanced",
    tags: ["native-modules", "bridge"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
  {
    id: 19,
    category: "javascript",
    question: "What is ES6?",
    answer: "",
    difficulty: "beginner",
    tags: ["es6", "javascript-features"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },
];

const BlogDetail = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Header />
      {/* Questions */}
      <section className="max-w-7xl mx-auto px-6 py-30">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Interview Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {questions
            .filter((q) => q.isActive !== false)
            .map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
