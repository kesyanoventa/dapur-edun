import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // pastikan nama & ekstensi file-nya sesuai

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <Link to="/" className="brand-name">
            Dapur Edun
          </Link>
        </div>

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
