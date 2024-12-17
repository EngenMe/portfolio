"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Home/Header";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-screen bg-[url('/bg-light.png')] dark:bg-[url('/bg-dark.png')] bg-cover bg-no-repeat bg-center transition-colors duration-500">
      <Header />
    </div>
  );
}
