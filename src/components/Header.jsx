import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img
          className="head-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png"
          alt=""
        />
        <Link to="/login" className="header-login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
