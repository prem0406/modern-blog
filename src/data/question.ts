import {type Question } from "../types/question";

export const questions: Question[] = [
  {
    id: 1,
    category: "react",
    question: "Context API vs Redux, which do you prefer and why?",
    difficulty: "intermediate",
    tags: ["state-management", "redux", "context"],
    isActive: true,
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
    answer: [
      {
        id: "h1",
        type: "heading",
        level: 2,
        text: "Overview"
      },
      {
        id: "p1",
        type: "paragraph",
        text:
          "Context API and Redux are both used for state management, but they address different levels of complexity."
      },
      {
        id: "h2",
        type: "heading",
        level: 3,
        text: "Context API"
      },
      {
        id: "l1",
        type: "list",
        items: [
          "Built into React",
          "Best for low-frequency updates",
          "Ideal for theme, auth, and locale"
        ]
      },
      {
        id: "h3",
        type: "heading",
        level: 3,
        text: "Redux"
      },
      {
        id: "l2",
        type: "list",
        items: [
          "Centralized predictable state",
          "Powerful DevTools",
          "Better scalability for large apps"
        ]
      },
      {
        id: "c1",
        type: "code",
        language: "tsx",
        code: `const store = configureStore({
  reducer: {
    user: userReducer
  }
});`
      },
      {
        id: "n1",
        type: "note",
        text:
          "Redux is generally preferred when state logic becomes complex or shared across many components."
      }
    ]
  }
];
