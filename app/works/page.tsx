"use client";

import Header from "@/components/About/Header";
import ProjectCards from "@/components/Works/ProjectCards";
import WorksNavigation from "@/components/Works/WorksNavigation";
import { PROJECT_TYPES } from "@/interfaces/Project.interface";
import { useState } from "react";

const Works = () => {
  const [selectedNav, setSelectedNav] = useState(0);

  return (
    <div className="flex flex-col gap-10">
      <Header>Portfolio</Header>
      <WorksNavigation
        selectedNav={selectedNav}
        setSelectedNav={setSelectedNav}
      />
      <ProjectCards selectedNav={PROJECT_TYPES[selectedNav]} />
    </div>
  );
};
export default Works;
