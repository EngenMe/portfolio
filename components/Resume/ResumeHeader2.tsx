import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  icon: LucideIcon;
  children: ReactNode;
}

const ResumeHeader2 = ({ icon: Icon, children }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-primary" />
      <h3 className="text-lg font-semibold">{children}</h3>
    </div>
  );
};
export default ResumeHeader2;
