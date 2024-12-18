"use client";

import { IResumeCard } from "@/interfaces/IResumeCard";
import { formatDate } from "@/utils/formatDate";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ResumeCard = ({
  dateFrom,
  dateTo,
  title,
  location,
  lightBgColor,
  darkBgColor,
}: IResumeCard) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const bgColor = theme === "dark" ? darkBgColor : lightBgColor;

  return (
    <div style={{ background: bgColor }} className="rounded-md">
      <div className="flex flex-col gap-4 text-center px-4 py-6">
        <div className="text-muted-foreground">
          {formatDate(dateFrom)} - {formatDate(dateTo)}
        </div>
        <div className="text-xl font-medium">{title}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};
export default ResumeCard;
