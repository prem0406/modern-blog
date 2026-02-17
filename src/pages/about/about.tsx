// import { questions } from "../../data/question";
// import { createQuestion } from "../../firebase/firestore.util";

const About = () => {
  const handleClick = async () => {
    // questions.map(async (q) => {
    //   console.log(q.question);
    //   await createQuestion(q);
    // });
  };

  return (
    <div className="py-32 px-8 flex justify-center items-center">
      <button
        onClick={handleClick}
        className="p-4 text-xl border-2 bg-amber-100 rounded-full"
      >
        Add data
      </button>
    </div>
  );
};

export default About;
