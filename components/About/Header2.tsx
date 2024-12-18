import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Header2 = ({ children }: Props) => {
  return <h3 className="text-3xl font-semibold">{children}</h3>;
};
export default Header2;
