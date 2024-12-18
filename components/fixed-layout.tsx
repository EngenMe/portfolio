"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import PersonalCard from "@/components/PersonalCard";
import Navigation from "@/components/Navigation";
import Footer from "./Footer";

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
    <div className="px-4 lg:px-28 h-screen transition-colors duration-500 relative">
      <Header />
      <div className="flex flex-col lg:flex-row py-64 gap-10">
        <div className="lg:w-1/3 w-full">
          <PersonalCard />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col items-end">
          <div className="hidden lg:flex">
            <Navigation />
          </div>
          <div className="w-full h-auto bg-background rounded-3xl my-10 pt-20 pb-10 px-10 flex flex-col justify-between">
            <div>{children}</div>
            <div className="text-center pt-20">
              <Footer>© 2024 All Rights Reserved by EngenMe</Footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
