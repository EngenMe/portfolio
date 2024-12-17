"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import PersonalCard from "@/components/PersonalCard";
import Navigation from "@/components/Navigation";

export default function FixedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-28 h-screen transition-colors duration-500 relative">
      <Header />
      <div className="flex py-64 gap-10">
        <div className="w-1/3">
          <PersonalCard />
        </div>
        <div className="w-2/3 flex flex-col items-end">
          <Navigation />
          <div className="w-full h-screen bg-background rounded-3xl my-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
