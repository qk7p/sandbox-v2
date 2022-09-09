import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

export function Navbar() {
  return (
    <nav className="Navbar">
      <span id="brand">
        <Link to="/">sandbox</Link>
      </span>
    </nav>
  );
}
