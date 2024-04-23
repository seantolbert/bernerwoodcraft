import logo from "../assets/Logo.svg";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="bg-wood-pattern bg-cover flex items-center flex-col justify-center">
      <div className="flex flex-col justify-center items-center text-white">
        <img src={logo} alt="Berner Woodcraft Logo" className="h-20" />
        <span className="text-5xl font-bold">BERNER</span>
        <span className="tracking-widest">WOODCRAFT</span>
      </div>
      {/* search */}
      {/* lower section */}
<div className="h-16 bg-amber-950 w-full"></div>
    </nav>
  );
};

export default Navbar;
