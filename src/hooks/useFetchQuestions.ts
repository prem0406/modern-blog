import { useEffect, useState } from "react";
import { getQuestions } from "../firebase/firestore.util";
import type { Question } from "../types/question";

export const useFetchQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      const res = await getQuestions();
      setQuestions(res);
      setIsLoading(false);
    };

    fetchList();
  }, []);

  return { questions, isLoading };
};
