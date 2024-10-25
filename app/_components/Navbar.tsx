import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex bg-secondary-2">
      <div className="pl-10">
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;
