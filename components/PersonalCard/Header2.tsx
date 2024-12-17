import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Header2 = ({ children }: Props) => {
  return <div className="text-foreground font-bold text-3xl">{children}</div>;
};
export default Header2;
