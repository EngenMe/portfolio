import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { IconType } from "react-icons";
import TechCard from "./TechCard";
import Link from "next/link";

interface Props {
  title: string;
  techUsed: { icon: IconType; title: string; color: string }[];
  link: string;
  description: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectDialog = ({
  title,
  techUsed,
  link,
  description,
  isOpen,
  setIsOpen,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="bg-input w-11/12 rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">{title}</DialogTitle>
          <Link
            href={link}
            target="_blank"
            className="text-sm text-center text-primary"
          >
            {link ? (
              <div className="hover:underline">
                {link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </div>
            ) : (
              <div className="text-muted-foreground cursor-auto">
                Link - Comming Soon
              </div>
            )}
          </Link>
          <DialogDescription className="text-center py-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-5 gap-4">
          {techUsed.map((item, index) => (
            <TechCard
              key={index}
              icon={item.icon}
              title={item.title}
              color={item.color}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProjectDialog;
