import { cn } from "@/lib/utils";
import Link from "next/link";
import { SUSE } from "next/font/google";

const suse = SUSE({
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <h1
      className={cn(
        suse.className,
        "text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#6765F1] to-[#EA51A0] bg-clip-text text-transparent cursor-pointer lg:hover:scale-125 animate-blur-in transition-transform duration-300"
      )}
    >
      <Link href="/">EngenMe</Link>
    </h1>
  );
};

export default Logo;
