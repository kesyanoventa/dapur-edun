import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Dapur Edun
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === "/about" ? "active" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className={location.pathname === "/products" ? "active" : ""}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
