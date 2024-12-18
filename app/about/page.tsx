import Card from "@/components/About/Card";
import Clients from "@/components/About/Clients";
import Header from "@/components/About/Header";
import Header2 from "@/components/About/Header2";
import Paragraph from "@/components/About/Paragraph";
import { clients } from "@/data/clients.data";
import { whatIDoCards } from "@/data/whatIDoCards.data";

const About = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header>About Me</Header>
      <div className="flex flex-col gap-4">
        <Paragraph>
          A skilled full stack developer with expertise in building efficient
          backend services using Node.js and Express, and creating responsive
          frontend applications with React. Proficient in database management
          with MongoDB and SQL.
        </Paragraph>
        <Paragraph>
          Strong in problem-solving, data structures, and algorithms, with a
          passion for delivering clean, scalable code. Proven ability to work on
          real-world projects, from RESTful APIs to full stack platforms,
          applying best practices in software development.
        </Paragraph>
      </div>
      <Header2>What I do!</Header2>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
        {whatIDoCards.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            lightBgColor={item.lightBgColor}
            darkBgColor={item.darkBgColor}
          />
        ))}
      </div>
      {clients.length !== 0 && (
        <div className="text-center bg-input w-full h-auto rounded-3xl p-4 shadow-lg">
          <Clients />
        </div>
      )}
    </div>
  );
};
export default About;
