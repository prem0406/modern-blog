import type { AnswerBlock } from "../../types/answer";

interface Props {
  block: AnswerBlock;
  onChange: (block: AnswerBlock) => void;
  onDelete: () => void;
}

const AnswerBlockEditor = ({ block, onChange, onDelete }: Props) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500 uppercase">
          {block.type}
        </span>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Delete
        </button>
      </div>

      {block.type === "heading" && (
        <div className="space-y-3">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2"
            value={block.level}
            onChange={(e) =>
              onChange({ ...block, level: Number(e.target.value) as 2 | 3 | 4 })
            }
          >
            <option value={2}>H2</option>
            <option value={3}>H3</option>
            <option value={4}>H4</option>
          </select>

          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={block.text}
            onChange={(e) => onChange({ ...block, text: e.target.value })}
          />
        </div>
      )}

      {block.type === "paragraph" && (
        <textarea
          className="w-full border border-gray-300 rounded-lg px-3 py-2 min-h-25"
          value={block.text}
          onChange={(e) => onChange({ ...block, text: e.target.value })}
        />
      )}

      {block.type === "list" && (
        <div className="space-y-2">
          {block.items.map((item, index) => (
            <input
              key={index}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={item}
              onChange={(e) => {
                const newItems = [...block.items];
                newItems[index] = e.target.value;
                onChange({ ...block, items: newItems });
              }}
            />
          ))}
          <button
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-sm"
            onClick={() => onChange({ ...block, items: [...block.items, ""] })}
          >
            Add Item
          </button>
        </div>
      )}

      {block.type === "code" && (
        <div className="space-y-3">
          <input
            className="border border-gray-300 rounded-lg px-3 py-2"
            value={block.language}
            onChange={(e) => onChange({ ...block, language: e.target.value })}
          />
          <textarea
            className="w-full bg-gray-900 text-green-400 font-mono rounded-lg px-4 py-3 min-h-38"
            value={block.code}
            onChange={(e) => onChange({ ...block, code: e.target.value })}
          />
        </div>
      )}

      {block.type === "note" && (
        <textarea
          className="w-full border-l-4 border-yellow-400 bg-yellow-50 rounded-lg px-3 py-2"
          value={block.text}
          onChange={(e) => onChange({ ...block, text: e.target.value })}
        />
      )}
    </div>
  );
};

export default AnswerBlockEditor;
