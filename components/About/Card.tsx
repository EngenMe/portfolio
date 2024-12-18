import { WhatIDoCard } from "@/interfaces/WhatIDoCard";
import Image from "next/image";

const Card = ({ icon, title, description, bgColor }: WhatIDoCard) => {
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
