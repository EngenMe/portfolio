import { INavItem } from "@/interfaces/INavItem.interface";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { handleRoute } from "@/utils/handleRoute";

const NavItem = ({ icon: Icon, label, route }: INavItem) => {
  const pathname = usePathname();
  const isActive = pathname === route;

  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => handleRoute(route, router)}
      className={cn(
        isActive ? "bg-primary" : "bg-input",
        "w-20 h-20 flex flex-col rounded-xl text-sm font-bold hover:bg-primary hover:text-foreground"
      )}
    >
      <Icon
        className="w-full h-full"
        style={{ width: "1.5rem", height: "1.5rem" }}
      />
      <div>{label}</div>
    </Button>
  );
};
export default NavItem;
