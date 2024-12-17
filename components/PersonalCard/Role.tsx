import { CloudUpload, Laptop } from "lucide-react";

const Role = () => {
  return (
    <div className="text-muted-foreground pt-3 text-lg flex items-center justify-center gap-5">
      <Laptop className="text-[#6A65EF]" />
      Full Stack Developer
      <CloudUpload className="text-[#E751A2]" />
    </div>
  );
};
export default Role;
