// src/services/questionService.ts
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { questionConverter } from "./questionConverter";
import type { Question } from "../types/question";
import { db } from "./firebase.config";

const questionsRef = collection(db, "questions").withConverter(
  questionConverter,
);

//Create questions
export const createQuestion = async (
  question: Omit<Question, "createdAt" | "updatedAt">,
) => {
  return await addDoc(questionsRef, {
    ...question,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  } as Question);
};

//Get all questions
export const getQuestions = async (): Promise<Question[]> => {
  const snapshot = await getDocs(questionsRef);
  return snapshot.docs.map((doc) => doc.data());
};

//Get question by id
export const getQuestionById = async (docId: string) => {
  const docRef = doc(db, "questions", docId).withConverter(questionConverter);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;
  return snapshot.data();
};

//Update question
export const updateQuestion = async (
  docId: string,
  data: Partial<Question>,
) => {
  const docRef = doc(db, "questions", docId).withConverter(questionConverter);

  return await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

//Delete a question
export const deleteQuestion = async (docId: string) => {
  const docRef = doc(db, "questions", docId);
  return await deleteDoc(docRef);
};
