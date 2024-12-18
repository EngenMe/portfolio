import { projects } from "@/data/projects.data";
import ProjectCard from "./ProjectCard";

interface Props {
  selectedNav: string;
}

const ProjectCards = ({ selectedNav }: Props) => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
      {projects.map(
        (item, index) =>
          (selectedNav === item.type || selectedNav === "all") && (
            <ProjectCard
              key={index}
              landingPage={item.landingPage}
              type={item.type}
              title={item.title}
              techUsed={item.techUsed}
              link={item.link}
              description={item.description}
            />
          )
      )}
    </div>
  );
};
export default ProjectCards;
