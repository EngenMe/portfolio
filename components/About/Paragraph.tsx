import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Paragraph = ({ children }: Props) => {
  return <p className="text-muted-foreground animate-blur-in">{children}</p>;
};
export default Paragraph;
