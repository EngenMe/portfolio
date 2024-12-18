import Header from "@/components/About/Header";
import KnowledgeCard from "@/components/Resume/KnowledgeCard";
import ResumeCard from "@/components/Resume/ResumeCard";
import ResumeHeader2 from "@/components/Resume/ResumeHeader2";
import { knowledges } from "@/data/knowledges.data";
import { educationCards, experienceCards } from "@/data/resumeCards";
import { Book, BriefcaseBusiness, GraduationCap } from "lucide-react";

const Resume = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header>Resume</Header>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-6 items-center">
          <ResumeHeader2 icon={BriefcaseBusiness}>Experience</ResumeHeader2>
          {experienceCards.map((item, index) => (
            <ResumeCard
              key={index}
              dateFrom={item.dateFrom}
              dateTo={item.dateTo}
              title={item.title}
              location={item.location}
              lightBgColor={item.lightBgColor}
              darkBgColor={item.darkBgColor}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6 items-center">
          <ResumeHeader2 icon={GraduationCap}>Education</ResumeHeader2>
          {educationCards.map((item, index) => (
            <ResumeCard
              key={index}
              dateFrom={item.dateFrom}
              dateTo={item.dateTo}
              title={item.title}
              location={item.location}
              lightBgColor={item.lightBgColor}
              darkBgColor={item.darkBgColor}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <ResumeHeader2 icon={Book}>Knowledge</ResumeHeader2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {knowledges.map((item, index) => (
            <KnowledgeCard key={index}>{item}</KnowledgeCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Resume;
