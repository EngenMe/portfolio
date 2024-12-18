import { clients } from "@/data/clients.data";
import Marquee from "../ui/marquee";
import ClientCard from "./ClientCard";

export function MarqueeDemo() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border-collapse bg-inherit shadow-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            logo={client.logo}
            name={client.name}
            url={client.url}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
