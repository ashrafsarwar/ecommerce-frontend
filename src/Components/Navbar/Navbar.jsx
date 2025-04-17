import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../Contexts/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

function Navbar() {
  const [path, setMenu] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const [count, setCount] = useState(0);

  const cartCount = () => {
    let count = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        count += cartItems[key];
      }
    }
    return count;
  };

  useEffect(() => {
    setCount(cartCount());
  }, [cartItems]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <img
        onClick={toggleMenu}
        src={nav_dropdown}
        alt="nav_dropdown"
        className={`nav-dropdown ${isMenuOpen ? "open" : ""}`}
      />
      <ul className={`navbar-menu ${isMenuOpen ? "show-toggle" : ""}`}>
        <li
          onClick={() => {
            setIsMenuOpen(false);
            setMenu("/");
          }}
        >
          <Link to="/">
            Shop
            {path === "/" ? <hr /> : ""}
          </Link>
        </li>
        <li
          onClick={() => {
            setIsMenuOpen(false);
            setMenu("/men");
          }}
        >
          <Link to="/men">
            Men
            {path === "/men" ? <hr /> : ""}
          </Link>
        </li>
        <li
          onClick={() => {
            setIsMenuOpen(false);
            setMenu("/women");
          }}
        >
          <Link to="/women">
            Women
            {path === "/women" ? <hr /> : ""}
          </Link>
        </li>
        <li
          onClick={() => {
            setIsMenuOpen(false);
            setMenu("/kid");
          }}
        >
          <Link to="/kid">
            Kids
            {path === "/kid" ? <hr /> : ""}
          </Link>
        </li>
      </ul>
      <div className="navbar-signin-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              toast.success("Logged out successfully");
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Log out
          </button>
        ) : (
          <Link to="loginlogout">
            <button>Sign In</button>
          </Link>
        )}

        <Link to="cart">
          <img src={cart} alt="cart" />
        </Link>
        <div className="cart-count">{cartCount() || count || 0}</div>
      </div>
    </div>
  );
}

export default Navbar;
