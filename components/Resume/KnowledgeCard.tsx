import { ReactNode } from "react";

const KnowledgeCard = ({ children }: { children: ReactNode }) => {
  return <div className="bg-input px-5 py-2 rounded-md w-auto">{children}</div>;
};
export default KnowledgeCard;
