import { CodeXml, Copy, CopyCheck } from "lucide-react";
import React, { type PropsWithChildren } from "react";

interface Props {
  content: string;
  codeLang?: string;
}

const CodeComponent: React.FC<PropsWithChildren<Props>> = ({
  content,
  codeLang,
}) => {
  return (
    <div className="bg-black/70 rounded-2xl p-6 mb-6 overflow-x-auto text-sm text-pink-100">
      <div className="flex justify-between mb-4">
        <span className="flex items-center gap-x-1">
          <CodeXml />{" "}
          {codeLang && <strong className="text-sm">{codeLang}</strong>}
        </span>
        <button className="hover:opacity-75 ">
          <Copy size={24} />
          <CopyCheck />
        </button>
      </div>
      <pre className="text-amber-100">
        <code>{content}</code>
      </pre>
    </div>
  );
};

export default CodeComponent;
