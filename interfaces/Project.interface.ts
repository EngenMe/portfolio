import { IconType } from "react-icons";
import { Client } from "./Client.interface";

export interface Project {
  landingPage: string;
  type: "backend" | "frontend" | "full-stack" | "desktop";
  title: string;
  techUsed: { icon: IconType; title: string; color: string }[];
  client?: Client;
  link: string;
  description: string;
}

export const PROJECT_TYPES = [
  "all",
  "backend",
  "frontend",
  "full-stack",
  "desktop",
] as const;
