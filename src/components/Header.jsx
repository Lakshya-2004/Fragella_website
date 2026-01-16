import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; 
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Fiore Profumo
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/About" className="nav-link">
          About
        </NavLink>

        <NavLink to="/products" className="nav-link">
          Explore
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>

     
        <NavLink to="/carts" className="nav-link cart-link">
          <FaShoppingCart size={20} />
        </NavLink>
      </nav>
    </header>
  );
};
