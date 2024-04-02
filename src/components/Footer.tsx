import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

function Footer() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error: any) {
      console.error("Logout Error", error.message);
    }
  };

  return (
    <div className="flex space-x-4">
      <Link to="/">home</Link>
      <Link to="login">Login</Link>
      <Link to="signup">Register</Link>
      <Link to="account">Account</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Footer;
