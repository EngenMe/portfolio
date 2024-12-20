import { ReactNode } from "react";
import GradualSpacing from "../ui/gradual-spacing";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div>
        <GradualSpacing
          className="font-display text-5xl font-bold tracking-tight"
          text={children as string}
        />
      </div>
      <hr className="w-full lg:w-1/3 border-t-2 border-destructive" />
    </div>
  );
};
export default Header;
