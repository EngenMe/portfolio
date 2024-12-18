"use client";

import { WhatIDoCard } from "@/interfaces/WhatIDoCard";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Card = ({
  icon,
  title,
  description,
  lightBgColor,
  darkBgColor,
}: WhatIDoCard) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const bgColor = theme === "dark" ? darkBgColor : lightBgColor;

  return (
    <div className="rounded-3xl" style={{ background: bgColor }}>
      <div className="flex gap-5 items-start p-4">
        <Image width={40} height={40} alt={title} src={icon} />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold">{title}</div>
          <div className="text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
