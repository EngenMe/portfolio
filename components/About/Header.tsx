import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div>
        <h2 className="text-5xl font-bold">{children}</h2>
      </div>
      <hr className="w-full lg:w-1/3 border-t-2 border-destructive" />
    </div>
  );
};
export default Header;
