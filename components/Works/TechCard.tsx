import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  color: string;
}

const TechCard = ({ icon: Icon, title, color }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Icon className="w-10 h-10" style={{ color: color }} />
      <div className="text-muted-foreground text-center">{title}</div>
    </div>
  );
};
export default TechCard;
