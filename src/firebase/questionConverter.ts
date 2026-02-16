// src/converters/questionConverter.ts
import {
  type FirestoreDataConverter,
  QueryDocumentSnapshot,
  type SnapshotOptions,
} from "firebase/firestore";
import type { Question } from "../types/question";

export const questionConverter: FirestoreDataConverter<Question> = {
  toFirestore(question: Question) {
    return {
      ...question,
    };
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Question {
    const data = snapshot.data(options);

    return {
      id: snapshot.id, // use firestore id
      category: data.category,
      question: data.question,
      answer: data.answer,
      difficulty: data.difficulty,
      tags: data.tags,
      isActive: data.isActive,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  },
};
