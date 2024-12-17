import React from "react";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-16 px-28">
      <Logo />
      <ThemeToggler />
    </header>
  );
};

export default Header;
