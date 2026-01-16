export type AnswerBlockType =
  | "heading"
  | "paragraph"
  | "list"
  | "code"
  | "note";

export interface AnswerBlockBase {
  id: string;
  type: AnswerBlockType;
}

export interface HeadingBlock extends AnswerBlockBase {
  type: "heading";
  level: 2 | 3 | 4;
  text: string;
}

export interface ParagraphBlock extends AnswerBlockBase {
  type: "paragraph";
  text: string;
}

export interface ListBlock extends AnswerBlockBase {
  type: "list";
  items: string[];
}

export interface CodeBlock extends AnswerBlockBase {
  type: "code";
  language: string;
  code: string;
}

export interface NoteBlock extends AnswerBlockBase {
  type: "note";
  text: string;
}

export type AnswerBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | CodeBlock
  | NoteBlock;
