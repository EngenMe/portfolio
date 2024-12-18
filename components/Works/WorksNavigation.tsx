import { PROJECT_TYPES } from "@/interfaces/Project.interface";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface Props {
  selectedNav: number;
  setSelectedNav: Dispatch<SetStateAction<number>>;
}

const WorksNavigation = ({ selectedNav, setSelectedNav }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 text-muted-foreground justify-center items-center lg:justify-end">
      {PROJECT_TYPES.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedNav(index)}
          className={cn(
            selectedNav === index ? "text-primary" : "text-muted-foreground",
            "cursor-pointer w-fit hover:text-primary"
          )}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </div>
      ))}
    </div>
  );
};
export default WorksNavigation;
