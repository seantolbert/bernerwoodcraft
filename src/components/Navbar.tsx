import logo from "../assets/Logo.svg";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-wood-pattern bg-cover bg-no-repeat bg-center p-4">
      {/* Container to center content and padding */}
      <div className="container mx-auto flex items-center justify-between md:justify-center">
        {/* Logo - hidden on mobile, shown on desktop */}
        <div className="hidden md:flex md:items-center md:flex-shrink-0">
          <img src={logo} alt="Berner Woodcraft Logo" className="h-8" />
          <span className="text-white font-montserrat-bold">
            Berner Woodcraft
          </span>
        </div>

        {/* Navigation links - adjust this part based on your navigation setup */}
        {/* ... */}

        {/* Logo - shown on mobile, hidden on desktop */}
        <div className="flex justify-between md:hidden w-full">
          <div className="flex items-center">
            <img src={logo} alt="Berner Woodcraft Logo" className="h-8" />
            <span className="text-white font-montserrat-bold">
              Berner Woodcraft
            </span>
          </div>
          <button onClick={() => setIsMenuOpen(isMenuOpen)}>
            <FiMenu className="text-white text-3xl" />
          </button>
        </div>

        {/* mobile menu button */}

        {/* Other elements like menu button for mobile */}
        {/* ... */}
      </div>
    </nav>
  );
};

export default Navbar;
