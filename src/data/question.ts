import { type Question } from "../types/question";

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
        text: "Event Loop",
      },
      {
        id: "1-2",
        type: "paragraph",
        text: "The event loop is a mechanism that allows JavaScript to handle asynchronous operations while being single-threaded.",
      },
      {
        id: "1-3",
        type: "list",
        items: [
          "Executes synchronous code first (call stack)",
          "Handles async callbacks via task queues",
          "Moves callbacks to stack when stack is empty",
        ],
      },
      {
        id: "1-4",
        type: "note",
        text: "Promises use the microtask queue, which has higher priority than macrotasks.",
      },
    ],
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
        text: "React Native allows you to build mobile apps using JavaScript and React that render real native UI components.",
      },
      {
        id: "2-2",
        type: "list",
        items: [
          "JavaScript runs in a JS engine (Hermes)",
          "UI is rendered using native components",
          "JS communicates with native via JSI (new architecture)",
        ],
      },
    ],
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
        text: "ScrollView renders all children at once, while FlatList renders items lazily.",
      },
      {
        id: "3-2",
        type: "list",
        items: [
          "ScrollView: small static content",
          "FlatList: large or dynamic lists",
          "FlatList provides better performance",
        ],
      },
    ],
  },

  {
    id: 4,
    category: "react native",
    question:
      "How do you handle offline data storage and sync in React Native?",
    difficulty: "advanced",
    tags: ["offline", "storage", "sync"],
    answer: [
      {
        id: "4-1",
        type: "paragraph",
        text: "Offline storage allows apps to work without internet and sync data once connectivity is restored.",
      },
      {
        id: "4-2",
        type: "list",
        items: [
          "Use AsyncStorage or MMKV for local data",
          "Queue API requests while offline",
          "Sync when network is available",
        ],
      },
    ],
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
        text: "Context API is meant for simple state sharing, while Redux is for complex global state management.",
      },
      {
        id: "5-2",
        type: "list",
        items: [
          "Context: simple, minimal setup",
          "Redux: predictable state, middleware, devtools",
          "Redux scales better for large apps",
        ],
      },
    ],
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
        text: "Hermes is a lightweight JavaScript engine optimized for React Native.",
      },
      {
        id: "6-2",
        type: "list",
        items: [
          "Faster app startup",
          "Lower memory usage",
          "Precompiled bytecode",
        ],
      },
    ],
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
        text: "babel.config.js defines how JavaScript and JSX are transformed before running in React Native.",
      },
      {
        id: "7-2",
        type: "list",
        items: [
          "Enables JSX support",
          "Transforms modern JavaScript",
          "Required for libraries like Reanimated",
        ],
      },
    ],
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
        text: "Shallow copy copies references, deep copy duplicates all nested data.",
      },
      {
        id: "8-2",
        type: "list",
        items: [
          "Shallow: spread operator, Object.assign",
          "Deep: structuredClone, JSON.parse/stringify",
          "Deep copy avoids mutation bugs",
        ],
      },
    ],
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
        text: "Overview",
      },
      {
        id: "p1",
        type: "paragraph",
        text: "Context API and Redux are both used for state management, but they address different levels of complexity.",
      },
      {
        id: "h2",
        type: "heading",
        level: 3,
        text: "Context API",
      },
      {
        id: "l1",
        type: "list",
        items: [
          "Built into React",
          "Best for low-frequency updates",
          "Ideal for theme, auth, and locale",
        ],
      },
      {
        id: "h3",
        type: "heading",
        level: 3,
        text: "Redux",
      },
      {
        id: "l2",
        type: "list",
        items: [
          "Centralized predictable state",
          "Powerful DevTools",
          "Better scalability for large apps",
        ],
      },
      {
        id: "c1",
        type: "code",
        language: "tsx",
        code: `const store = configureStore({
  reducer: {
    user: userReducer
  }
});`,
      },
      {
        id: "n1",
        type: "note",
        text: "Redux is generally preferred when state logic becomes complex or shared across many components.",
      },
    ],
  },
  {
    id: 10,
    category: "javascript",
    question: "What are prototypes in JavaScript?",
    difficulty: "intermediate",
    tags: ["prototypes", "inheritance", "javascript"],
    answer: [
      {
        id: "10-1",
        type: "paragraph",
        text: "Prototypes are JavaScript’s mechanism for inheritance and shared behavior. Every object in JavaScript has an internal link to another object called its prototype.",
      },
      {
        id: "10-2",
        type: "paragraph",
        text: "When a property or method is accessed on an object, JavaScript first looks on the object itself. If not found, it looks up the prototype chain until it reaches null.",
      },
      {
        id: "10-3",
        type: "heading",
        level: 3,
        text: "Prototype Chain",
      },
      {
        id: "10-4",
        type: "list",
        items: [
          "Object properties are resolved through delegation",
          "Methods are shared via the prototype",
          "The chain ends at Object.prototype → null",
        ],
      },
      {
        id: "10-5",
        type: "heading",
        level: 3,
        text: "Constructor Function Example",
      },
      {
        id: "10-6",
        type: "code",
        language: "javascript",
        code: "function User(name) {\n  this.name = name;\n}\n\nUser.prototype.sayHi = function () {\n  return `Hi ${this.name}`;\n};\n\nconst user = new User('A');\nuser.sayHi();",
      },
      {
        id: "10-7",
        type: "heading",
        level: 3,
        text: "__proto__ vs prototype",
      },
      {
        id: "10-8",
        type: "list",
        items: [
          "`prototype` exists on constructor functions",
          "`__proto__` is the internal reference on objects",
          "obj.__proto__ === Constructor.prototype",
        ],
      },
      {
        id: "10-9",
        type: "note",
        text: "ES6 classes are syntactic sugar over JavaScript’s prototype-based inheritance model.",
      },
    ],
  },
  {
    id: 11,
    category: "javascript",
    question:
      "Explain what happens when a method is defined both inside a constructor function and on its prototype. Why does one override the other?",
    difficulty: "advanced",
    tags: [
      "prototype",
      "constructor function",
      "prototype chain",
      "method shadowing",
      "javascript",
    ],
    answer: [
      {
        id: "11-1",
        type: "paragraph",
        text: "This example demonstrates how JavaScript resolves methods when the same method name exists both on an object instance and on its prototype.",
      },
      {
        id: "11-2",
        type: "code",
        language: "javascript",
        code: 'function person() {\n  this.getSalary = function () {\n    console.log("This is a constructor function");\n  };\n}\n\nconst p = new person();\n\nperson.prototype.getSalary = function () {\n  console.log("This is a prototype function");\n};',
      },
      {
        id: "11-3",
        type: "heading",
        level: 3,
        text: "Step 1: What happens when the constructor function is called",
      },
      {
        id: "11-4",
        type: "paragraph",
        text: "When the `new` keyword is used with a constructor function, JavaScript performs a series of internal steps. It first creates a new empty object, then links this object to the constructor’s prototype using the internal `[[Prototype]]` reference. After that, it calls the constructor function with `this` bound to the newly created object, and finally returns that object.",
      },
      {
        id: "11-5",
        type: "paragraph",
        text: "Inside the constructor, the method `getSalary` is assigned directly to `this`. This means every instance created using `new person()` will have its own separate copy of the `getSalary` function stored directly on the object.",
      },
      {
        id: "11-6",
        type: "heading",
        level: 3,
        text: "Step 2: Understanding the prototype method definition",
      },
      {
        id: "11-7",
        type: "paragraph",
        text: "After the instance `p` is created, another method with the same name `getSalary` is added to `person.prototype`. This method does not overwrite the instance method. Instead, it becomes part of the prototype object that all instances of `person` share.",
      },
      {
        id: "11-8",
        type: "paragraph",
        text: "At this point, there are two methods with the same name: one exists directly on the instance `p`, and the other exists on `person.prototype`.",
      },
      {
        id: "11-9",
        type: "heading",
        level: 3,
        text: "Step 3: How JavaScript resolves method calls",
      },
      {
        id: "11-10",
        type: "paragraph",
        text: "When `p.getSalary()` is called, JavaScript looks for the method using the prototype chain resolution algorithm. It first checks whether `getSalary` exists directly on the object `p`. If it finds the method there, it stops searching and executes that function.",
      },
      {
        id: "11-11",
        type: "paragraph",
        text: "Since `getSalary` was defined inside the constructor, it exists directly on the instance. As a result, JavaScript never looks at the prototype, and the prototype method is ignored.",
      },
      {
        id: "11-12",
        type: "heading",
        level: 3,
        text: "Execution Order and Output",
      },
      {
        id: "11-13",
        type: "paragraph",
        text: "The output of calling `p.getSalary()` will be `This is a constructor function`. This happens because instance properties always take precedence over prototype properties with the same name.",
      },
      {
        id: "11-14",
        type: "heading",
        level: 3,
        text: "Visual Representation of the Prototype Chain",
      },
      {
        id: "11-15",
        type: "paragraph",
        text: "Internally, the object structure can be visualized as follows: the instance `p` contains its own `getSalary` method, and its internal prototype points to `person.prototype`, which also contains a `getSalary` method. JavaScript selects the closest match in the chain.",
      },
      {
        id: "11-16",
        type: "heading",
        level: 3,
        text: "Why this behavior exists",
      },
      {
        id: "11-17",
        type: "paragraph",
        text: "This design allows JavaScript to support flexible object composition. Instance methods allow per-object customization, while prototype methods enable shared behavior and memory efficiency.",
      },
      {
        id: "11-18",
        type: "heading",
        level: 3,
        text: "Memory and Performance Implications",
      },
      {
        id: "11-19",
        type: "paragraph",
        text: "Defining methods inside the constructor creates a new function for every instance, which increases memory usage. Prototype methods are shared across all instances, making them more memory-efficient and generally preferred unless instance-specific behavior is required.",
      },
      {
        id: "11-20",
        type: "heading",
        level: 3,
        text: "How to Access the Prototype Method",
      },
      {
        id: "11-21",
        type: "paragraph",
        text: "If the instance method is removed using the `delete` operator, JavaScript will then resolve the method from the prototype, and the prototype version of `getSalary` will be executed.",
      },
      {
        id: "11-22",
        type: "code",
        language: "javascript",
        code: 'delete p.getSalary;\np.getSalary(); // "This is a prototype function" \n\n//OR you can do like this \np.__proto__.getSalary(); // "This is a prototype function',
      },
      {
        id: "11-23",
        type: "heading",
        level: 3,
        text: "Key Interview Takeaways",
      },
      {
        id: "11-24",
        type: "list",
        items: [
          "Instance methods override prototype methods with the same name",
          "JavaScript resolves properties by searching the object first, then the prototype chain",
          "Prototype methods are shared and memory efficient",
          "Constructor methods are recreated for every instance",
        ],
      },
      {
        id: "11-25",
        type: "note",
        text: "This behavior is commonly referred to as method shadowing, where an instance property hides a prototype property with the same name.",
      },
    ],
  },
  {
    id: 12,
    category: "javascript",
    question:
      "What is the difference between __proto__ and prototype in JavaScript?",
    difficulty: "intermediate",
    tags: ["javascript", "prototypes", "inheritance", "__proto__", "prototype"],
    answer: [
      {
        id: "1",
        type: "heading",
        level: 2,
        text: "Understanding JavaScript Prototypes",
      },
      {
        id: "2",
        type: "paragraph",
        text: "JavaScript uses prototype-based inheritance, which means objects can inherit properties and methods from other objects. Two important terms in this mechanism are prototype and __proto__. Although they are related, they serve different purposes and exist in different places.",
      },
      {
        id: "3",
        type: "heading",
        level: 3,
        text: "What is prototype?",
      },
      {
        id: "4",
        type: "paragraph",
        text: "The prototype property exists on constructor functions. It is an object that defines properties and methods that should be shared across all instances created using that constructor. When you add methods to a constructor's prototype, all instances automatically get access to those methods.",
      },
      {
        id: "5",
        type: "code",
        language: "javascript",
        code: "function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.sayHello = function () {\n  console.log(`Hello, my name is ${this.name}`);\n};",
      },
      {
        id: "6",
        type: "paragraph",
        text: "In this example, sayHello is defined once on Person.prototype and shared by all Person instances, which makes it memory efficient.",
      },
      {
        id: "7",
        type: "heading",
        level: 3,
        text: "What is __proto__?",
      },
      {
        id: "8",
        type: "paragraph",
        text: "__proto__ is an internal property that exists on every JavaScript object. It points to the prototype object of the constructor that created the object. JavaScript uses __proto__ internally to look up properties and methods when they are not found directly on the object.",
      },
      {
        id: "9",
        type: "code",
        language: "javascript",
        code: 'const p1 = new Person("Prem");\n\np1.__proto__ === Person.prototype; // true',
      },
      {
        id: "10",
        type: "paragraph",
        text: "When a method is called on an object, JavaScript first checks the object itself. If not found, it follows the __proto__ chain until it finds the property or reaches null.",
      },
      {
        id: "11",
        type: "heading",
        level: 3,
        text: "Relationship Between prototype and __proto__",
      },
      {
        id: "12",
        type: "paragraph",
        text: "The prototype property is used during object creation to set up inheritance, while __proto__ is used at runtime for property lookup. An object's __proto__ always points to its constructor's prototype.",
      },
      {
        id: "13",
        type: "heading",
        level: 3,
        text: "Key Differences",
      },
      {
        id: "14",
        type: "list",
        items: [
          "prototype exists on constructor functions, while __proto__ exists on all objects",
          "prototype defines shared behavior, while __proto__ links an object to its prototype",
          "prototype is used when creating objects, while __proto__ is used when accessing properties",
          "prototype should be used directly, while __proto__ should generally be avoided in favor of safer APIs",
        ],
      },
      {
        id: "15",
        type: "note",
        text: "Best practice is to define shared methods using prototype and avoid directly manipulating __proto__. Use Object.getPrototypeOf() instead when you need to access an object's prototype.",
      },
    ],
  },
  {
    id: 13,
    category: "react",
    question: "Create a custom hook to get the current window size in React.",
    difficulty: "intermediate",
    tags: ["react hooks", "custom hook", "window", "resize", "useEffect"],
    isActive: true,
    createdAt: "2026-01-28",
    answer: [
      {
        id: "h1",
        type: "heading",
        level: 2,
        text: "Problem Statement",
      },
      {
        id: "p1",
        type: "paragraph",
        text: "The requirement is to create a reusable custom React hook that returns the current width and height of the browser window and updates the values whenever the window is resized.",
      },
      {
        id: "h2",
        type: "heading",
        level: 2,
        text: "Approach",
      },
      {
        id: "l1",
        type: "list",
        items: [
          "Use useState to store the window width and height",
          "Use useEffect to register a resize event listener",
          "Update state when the resize event fires",
          "Clean up the event listener on component unmount",
        ],
      },
      {
        id: "h3",
        type: "heading",
        level: 2,
        text: "Custom Hook Implementation",
      },
      {
        id: "c1",
        type: "code",
        language: "javascript",
        code: `import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;`,
      },
      {
        id: "h4",
        type: "heading",
        level: 2,
        text: "Usage Example",
      },
      {
        id: "c2",
        type: "code",
        language: "javascript",
        code: `import useWindowSize from "./useWindowSize";

function Example() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}`,
      },
      {
        id: "h5",
        type: "heading",
        level: 2,
        text: "Explanation",
      },
      {
        id: "p2",
        type: "paragraph",
        text: "The custom hook uses useState to store window dimensions and useEffect to listen for resize events. Whenever the window is resized, the state is updated, triggering a re-render in components using the hook. Cleanup ensures there are no memory leaks.",
      },
      {
        id: "n1",
        type: "note",
        text: "In server-side rendering environments like Next.js, access to the window object should be guarded to avoid runtime errors.",
      },
    ],
  },
  {
    id: 14,
    category: "react",
    question: "Explain event bubbling and capturing in React with examples",
    difficulty: "intermediate",
    tags: [
      "react-events",
      "event-bubbling",
      "event-capturing",
      "synthetic-events",
      "event-delegation",
    ],
    isActive: true,
    answer: [
      {
        id: "h1",
        type: "heading",
        level: 2,
        text: "Event Bubbling in React",
      },
      {
        id: "p1",
        type: "paragraph",
        text: "In React, events bubble by default. When an event occurs on a child element, it propagates upward to its parent components. React uses Synthetic Events which follow the same bubbling behavior as native browser events.",
      },
      {
        id: "c1",
        type: "code",
        language: "jsx",
        code: `function App() {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = () => {
    console.log("Child clicked");
  };

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Child</button>
    </div>
  );
}

export default App;`,
      },
      {
        id: "n1",
        type: "note",
        text: "Clicking the button logs 'Child clicked' first, then 'Parent clicked' due to bubbling.",
      },
      {
        id: "h2",
        type: "heading",
        level: 2,
        text: "Stopping Event Propagation in React",
      },
      {
        id: "p2",
        type: "paragraph",
        text: "You can stop event bubbling in React using stopPropagation on the Synthetic Event object. This prevents the event from reaching parent components.",
      },
      {
        id: "c2",
        type: "code",
        language: "jsx",
        code: `function App() {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
    console.log("Child clicked");
  };

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Child</button>
    </div>
  );
}`,
      },
      {
        id: "n2",
        type: "note",
        text: "Parent click handler will not execute because propagation is stopped at the child level.",
      },
      {
        id: "h3",
        type: "heading",
        level: 2,
        text: "Event Capturing in React",
      },
      {
        id: "p3",
        type: "paragraph",
        text: "React supports event capturing using capture props like onClickCapture. In capturing, the event travels from parent to child before reaching the target.",
      },
      {
        id: "c3",
        type: "code",
        language: "jsx",
        code: `function App() {
  return (
    <div
      onClickCapture={() => console.log("Parent capture")}
      onClick={() => console.log("Parent bubble")}
    >
      <button onClick={() => console.log("Child click")}>
        Child
      </button>
    </div>
  );
}`,
      },
      {
        id: "n3",
        type: "note",
        text: "Output order: Parent capture → Child click → Parent bubble.",
      },
      {
        id: "h4",
        type: "heading",
        level: 2,
        text: "Event Delegation in React",
      },
      {
        id: "p4",
        type: "paragraph",
        text: "React automatically implements event delegation by attaching a single listener at the root. This improves performance and avoids attaching listeners to every DOM node.",
      },
      {
        id: "c4",
        type: "code",
        language: "jsx",
        code: `function App() {
  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.innerText);
    }
  };

  return (
    <div onClick={handleClick}>
      <button>Save</button>
      <button>Delete</button>
      <button>Update</button>
    </div>
  );
}`,
      },
      {
        id: "n4",
        type: "note",
        text: "This works because React relies on bubbling and event delegation internally.",
      },
    ],
  },
];
