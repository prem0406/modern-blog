import { useEffect, useState } from "react";
import { getQuestionById } from "../firebase/firestore.util";
import type { Question } from "../types/question";

export const useFetchQuestionById = (id?: string) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    const fetchListById = async () => {
      const res = await getQuestionById(id);

      setQuestion(res);
      setIsLoading(false);
    };

    fetchListById();
  }, [id]);

  return { question, isLoading };
};
