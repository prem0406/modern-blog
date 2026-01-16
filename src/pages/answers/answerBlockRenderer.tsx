import { type FC, type JSX } from "react";
import type { AnswerBlock } from "../../types/answer";

interface Props {
  block: AnswerBlock;
}

const AnswerBlockRenderer: FC<Props> = ({ block }) => {
  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
      return (
        <Tag className="text-purple-700 font-bold mt-10 mb-4 text-2xl">
          {block.text}
        </Tag>
      );
    }

    case "paragraph":
      return <p className="text-gray-800 leading-relaxed mb-6">{block.text}</p>;

    case "list":
      return (
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "code":
      return (
        <pre className="bg-black/70 rounded-2xl p-6 mb-6 overflow-x-auto text-sm text-pink-100">
          <code>{block.code}</code>
        </pre>
      );

    case "note":
      return (
        <div className="border-l-4 border-pink-500 bg-pink-500/10 rounded-xl p-4 mb-6 text-gray-800">
          {block.text}
        </div>
      );

    default:
      return null;
  }
};

export default AnswerBlockRenderer;
