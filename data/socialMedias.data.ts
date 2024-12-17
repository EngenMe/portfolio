import { ISocialMediaItem } from "@/interfaces/ISocialMediaItem.interface";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const socialMedias: ISocialMediaItem[] = [
  {
    icon: FaGithub,
    url: "https://github.com/EngenMe",
    inLightModeColor: "#24292F",
    inDarkModeColor: "#F5F5F5",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/engenme/",
    inLightModeColor: "#0077B5",
    inDarkModeColor: "#00A0DC",
  },
  {
    icon: FaSquareXTwitter,
    url: "https://x.com/Mohamed06058360",
    inLightModeColor: "#000000",
    inDarkModeColor: "#E7E9EA",
  },
  {
    icon: SiLeetcode,
    url: "https://leetcode.com/u/0BDoSenkrc/",
    inLightModeColor: "#FFD923",
    inDarkModeColor: "#FFD983",
  },
];
