import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className="rounded-full bg-background dark:bg-gray-800 shadow-md w-12 h-12 flex justify-center items-center transition-all duration-300"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-8 h-8 text-foreground transition-transform duration-300" />
      ) : (
        <Moon className="w-8 h-8 text-foreground transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggler;
