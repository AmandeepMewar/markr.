import React from "react";
import Logo from "./Logo";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="flex ">
      <div className="pl-10">
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;
