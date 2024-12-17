import Logo from "./Header/Logo";
import ThemeToggler from "./Header/ThemeToggler";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-16">
      <Logo />
      <ThemeToggler />
    </header>
  );
};

export default Header;
