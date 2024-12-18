import Logo from "./Header/Logo";
import SheetComponent from "./Header/SheetComponent";
import ThemeToggler from "./Header/ThemeToggler";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-4 lg:pt-16">
      <Logo />
      <ThemeToggler />
      <div className="lg:hidden">
        <SheetComponent />
      </div>
    </header>
  );
};

export default Header;
