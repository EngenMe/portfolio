import { INavItem } from "@/interfaces/INavItem.interface";
import { Contact, EarthLock, FileText, User } from "lucide-react";

export const navItems: INavItem[] = [
  { icon: User, label: "About", route: "/about" },
  { icon: FileText, label: "Resume", route: "/resume" },
  { icon: EarthLock, label: "Works", route: "/works" },
  { icon: Contact, label: "Contact", route: "/contact" },
];
