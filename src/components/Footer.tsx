import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex space-x-4">
      <Link to="/">home</Link>
      <Link to="login">Login</Link>
      <Link to="signup">Register</Link>
    </div>
  );
}

export default Footer;
