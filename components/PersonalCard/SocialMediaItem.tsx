import { ISocialMediaItem } from "@/interfaces/ISocialMediaItem.interface";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const SocialMediaItem = ({
  icon: Icon,
  url,
  inDarkModeColor,
  inLightModeColor,
}: ISocialMediaItem) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconColor = theme === "dark" ? inDarkModeColor : inLightModeColor;

  return (
    <Link href={url} target="_blank">
      <div className="w-10 h-10 bg-input flex justify-center items-center rounded-md hover:bg-primary transition-colors">
        <Icon
          className="w-5 h-5"
          style={{ color: iconColor }}
          data-theme={inDarkModeColor ? "dark" : "light"}
        />
      </div>
    </Link>
  );
};
export default SocialMediaItem;
