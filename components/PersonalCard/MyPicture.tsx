"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const MyPicture = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-[240px] h-[240px] overflow-hidden rounded-[20px] absolute -top-32 z-10">
      {isLoading && <Skeleton className="w-full h-full rounded-[20px]" />}
      <Image
        src="/my-picture.jpeg"
        alt="Mohamed personal picture"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default MyPicture;
