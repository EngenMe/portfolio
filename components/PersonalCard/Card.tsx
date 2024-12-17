import { handleDownload } from "@/utils/handleDownload";
import { Button } from "../ui/button";
import Contact from "./Contact";
import Header2 from "./Header2";
import Role from "./Role";
import SocialMedia from "./SocialMedia";

const Card = () => {
  return (
    <div className="bg-background w-full h-auto rounded-3xl pt-44 text-center flex flex-col justify-center items-center">
      <Header2>Mohamed Hasnaoui</Header2>
      <Role />
      <SocialMedia />
      <Contact />
      <div className="py-10 w-full">
        <Button
          onClick={handleDownload}
          className="text-xl w-3/4 h-14 bg-gradient-to-r from-[#F95053] to-[#DE2575] bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-300 ease-in-out"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
};
export default Card;
