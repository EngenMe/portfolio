import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Footer = ({ children }: Props) => {
  return <footer className="text-muted-foreground">{children}</footer>;
};
export default Footer;
