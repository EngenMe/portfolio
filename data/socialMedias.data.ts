import { ISocialMediaItem } from "@/interfaces/ISocialMediaItem.interface";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialMedias: ISocialMediaItem[] = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/engenme/",
    inLightModeColor: "#0A66C2",
    inDarkModeColor: "#0A66C2",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/engenme_mohamed/profilecard/?igsh=MTUyZjlxaGM4dW84dA==",
    inLightModeColor: "#E4405F",
    inDarkModeColor: "#E4405F",
  },
  {
    icon: FaSquareXTwitter,
    url: "https://x.com/Mohamed06058360",
    inLightModeColor: "#000000",
    inDarkModeColor: "#E7E9EA",
  },
];
