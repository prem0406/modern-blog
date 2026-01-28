import { useState } from "react";
import InnerElement from "./innerElement";

const About = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  return (
    <div className="max-w-7xl mx-auto px-6 py-30 flex justify-between">
      <button
        onClick={increment}
        className="px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
      >
        Increment
      </button>
      <InnerElement count={count} />
    </div>
  );
};

export default About;
