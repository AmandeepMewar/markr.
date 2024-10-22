import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex ">
      <div className="pl-10">
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;
