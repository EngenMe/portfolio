import { navItems } from "@/data/navItems.data";
import NavItem from "./Navigation/NavItem";

interface Props {
  onClose?: () => void;
}

const Navigation = ({ onClose }: Props) => {
  return (
    <div className="bg-background h-32 w-full rounded-3xl flex flex-col lg:flex-row gap-5 justify-between items-center px-10 pt-10 lg:pt-0">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          label={item.label}
          route={item.route}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
export default Navigation;
