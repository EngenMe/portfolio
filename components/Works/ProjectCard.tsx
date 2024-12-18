"use client";

import { Project } from "@/interfaces/Project.interface";
import Image from "next/image";
import { useState } from "react";
import ProjectDialog from "./ProjectDialog";

const ProjectCard = ({
  landingPage,
  type,
  title,
  techUsed,
  link,
  description,
}: Project) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsDialogOpen(true)}
        className="py-10 bg-input w-11/12 rounded-md shadow-lg h-auto hover:scale-110 transition-transform cursor-pointer"
      >
        <div className="flex justify-center items-center gap-4 px-4">
          <Image
            width={120}
            height={280}
            alt={title}
            src={landingPage}
            className="rounded-md shadow-lg object-cover"
          />
          <div>
            <div className="text-muted-foreground text-sm">{type}</div>
            <div className="font-medium">{title}</div>
          </div>
        </div>
      </div>
      {/* Dialog */}
      <ProjectDialog
        techUsed={techUsed}
        link={link}
        description={description}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        title={title}
      />
    </div>
  );
};
export default ProjectCard;
