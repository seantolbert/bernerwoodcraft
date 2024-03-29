import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-wood-pattern h-32 text-white">
      {/* top row */}
      <div>
        
      </div>



      <Link to="/">
        <img src={logo} alt="Berner Woodcraft Logo" className="h-20" />
      </Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/landing">Landing</Link>
    </nav>
  );
};

export default Navbar;
