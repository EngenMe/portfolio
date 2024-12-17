import { navItems } from "@/data/navItems.data";
import NavItem from "./Navigation/NavItem";

const Navigation = () => {
  return (
    <div className="bg-background h-32 w-4/6 rounded-3xl flex gap-5 justify-between items-center px-10">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          label={item.label}
          route={item.route}
        />
      ))}
    </div>
  );
};
export default Navigation;
