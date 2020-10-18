import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img id="logo" src={Logo} width="200px" alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/daftarFilm">Movie List Editor</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
