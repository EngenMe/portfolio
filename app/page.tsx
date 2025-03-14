import GlobeComponent from "@/components/Main/GlobeComponent";
import BlurIn from "@/components/ui/blur-in";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <BlurIn
        word="Transforming Your Vision Into Digital Reality"
        className="text-4xl font-bold text-primary dark:text-white"
      />
      <GlobeComponent />
    </div>
  );
};
export default Main;
