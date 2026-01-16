import {type Question } from "../types/question";

// export const questions: Question[] = [
//   {
//     id: 1,
//     category: "react",
//     question: "Context API vs Redux, which do you prefer and why?",
//     difficulty: "intermediate",
//     tags: ["state-management", "redux", "context"],
//     isActive: true,
//     createdAt: "2026-01-16",
//     updatedAt: "2026-01-16",
//     answer: [
//       {
//         id: "h1",
//         type: "heading",
//         level: 2,
//         text: "Overview"
//       },
//       {
//         id: "p1",
//         type: "paragraph",
//         text:
//           "Context API and Redux are both used for state management, but they address different levels of complexity."
//       },
//       {
//         id: "h2",
//         type: "heading",
//         level: 3,
//         text: "Context API"
//       },
//       {
//         id: "l1",
//         type: "list",
//         items: [
//           "Built into React",
//           "Best for low-frequency updates",
//           "Ideal for theme, auth, and locale"
//         ]
//       },
//       {
//         id: "h3",
//         type: "heading",
//         level: 3,
//         text: "Redux"
//       },
//       {
//         id: "l2",
//         type: "list",
//         items: [
//           "Centralized predictable state",
//           "Powerful DevTools",
//           "Better scalability for large apps"
//         ]
//       },
//       {
//         id: "c1",
//         type: "code",
//         language: "tsx",
//         code: `const store = configureStore({
//   reducer: {
//     user: userReducer
//   }
// });`
//       },
//       {
//         id: "n1",
//         type: "note",
//         text:
//           "Redux is generally preferred when state logic becomes complex or shared across many components."
//       }
//     ]
//   }
// ];


export const questions: Question[] = [
  {
    id: 1,
    category: "javascript",
    question: "What is the Event Loop?",
    difficulty: "intermediate",
    tags: ["event loop", "async", "javascript"],
    answer: [
      {
        id: "1-1",
        type: "heading",
        level: 3,
        text: "Event Loop"
      },
      {
        id: "1-2",
        type: "paragraph",
        text: "The event loop is a mechanism that allows JavaScript to handle asynchronous operations while being single-threaded."
      },
      {
        id: "1-3",
        type: "list",
        items: [
          "Executes synchronous code first (call stack)",
          "Handles async callbacks via task queues",
          "Moves callbacks to stack when stack is empty"
        ]
      },
      {
        id: "1-4",
        type: "note",
        text: "Promises use the microtask queue, which has higher priority than macrotasks."
      }
    ]
  },

  {
    id: 2,
    category: "react native",
    question: "How does a React Native app work?",
    difficulty: "beginner",
    tags: ["architecture", "react native"],
    answer: [
      {
        id: "2-1",
        type: "paragraph",
        text: "React Native allows you to build mobile apps using JavaScript and React that render real native UI components."
      },
      {
        id: "2-2",
        type: "list",
        items: [
          "JavaScript runs in a JS engine (Hermes)",
          "UI is rendered using native components",
          "JS communicates with native via JSI (new architecture)"
        ]
      }
    ]
  },

  {
    id: 3,
    category: "react native",
    question: "Difference between ScrollView and FlatList",
    difficulty: "beginner",
    tags: ["scrollview", "flatlist", "performance"],
    answer: [
      {
        id: "3-1",
        type: "paragraph",
        text: "ScrollView renders all children at once, while FlatList renders items lazily."
      },
      {
        id: "3-2",
        type: "list",
        items: [
          "ScrollView: small static content",
          "FlatList: large or dynamic lists",
          "FlatList provides better performance"
        ]
      }
    ]
  },

  {
    id: 4,
    category: "react native",
    question: "How do you handle offline data storage and sync in React Native?",
    difficulty: "advanced",
    tags: ["offline", "storage", "sync"],
    answer: [
      {
        id: "4-1",
        type: "paragraph",
        text: "Offline storage allows apps to work without internet and sync data once connectivity is restored."
      },
      {
        id: "4-2",
        type: "list",
        items: [
          "Use AsyncStorage or MMKV for local data",
          "Queue API requests while offline",
          "Sync when network is available"
        ]
      }
    ]
  },

  {
    id: 5,
    category: "react",
    question: "Difference between Context API and Redux",
    difficulty: "intermediate",
    tags: ["context", "redux", "state management"],
    answer: [
      {
        id: "5-1",
        type: "paragraph",
        text: "Context API is meant for simple state sharing, while Redux is for complex global state management."
      },
      {
        id: "5-2",
        type: "list",
        items: [
          "Context: simple, minimal setup",
          "Redux: predictable state, middleware, devtools",
          "Redux scales better for large apps"
        ]
      }
    ]
  },

  {
    id: 6,
    category: "react native",
    question: "How does Hermes improve React Native performance?",
    difficulty: "intermediate",
    tags: ["hermes", "performance"],
    answer: [
      {
        id: "6-1",
        type: "paragraph",
        text: "Hermes is a lightweight JavaScript engine optimized for React Native."
      },
      {
        id: "6-2",
        type: "list",
        items: [
          "Faster app startup",
          "Lower memory usage",
          "Precompiled bytecode"
        ]
      }
    ]
  },

  {
    id: 7,
    category: "react native",
    question: "What is the purpose of babel.config.js in React Native?",
    difficulty: "beginner",
    tags: ["babel", "build"],
    answer: [
      {
        id: "7-1",
        type: "paragraph",
        text: "babel.config.js defines how JavaScript and JSX are transformed before running in React Native."
      },
      {
        id: "7-2",
        type: "list",
        items: [
          "Enables JSX support",
          "Transforms modern JavaScript",
          "Required for libraries like Reanimated"
        ]
      }
    ]
  },

  {
    id: 8,
    category: "javascript",
    question: "Difference between shallow copy and deep copy",
    difficulty: "intermediate",
    tags: ["copy", "objects"],
    answer: [
      {
        id: "8-1",
        type: "paragraph",
        text: "Shallow copy copies references, deep copy duplicates all nested data."
      },
      {
        id: "8-2",
        type: "list",
        items: [
          "Shallow: spread operator, Object.assign",
          "Deep: structuredClone, JSON.parse/stringify",
          "Deep copy avoids mutation bugs"
        ]
      }
    ]
  },
    {
    id: 9,
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

