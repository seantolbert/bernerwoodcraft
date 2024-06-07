import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 absolute w-full">
      <div className="flex items-center text-white">
        <img src={logo} alt="Berner Woodcraft Logo" className="h-10 pr-2" />
        <span className="font-bold">BERNER</span>
        <span className="tracking-widest">WOODCRAFT</span>
      </div>
      {/* search */}
      {/* lower section */}
      {/* <div className="h-16 bg-[#191615] w-full"></div> */}
    </nav>
  );
};

export default Navbar;
