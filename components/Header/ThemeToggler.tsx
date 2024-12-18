import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className="rounded-full bg-background hover:bg-primary dark:hover:bg-primary shadow-md w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center transition-all duration-300"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-6 h-6 lg:w-8 lg:h-8 text-foreground transition-transform duration-300" />
      ) : (
        <Moon className="w-6 h-6 lg:w-8 lg:h-8 text-foreground transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggler;
