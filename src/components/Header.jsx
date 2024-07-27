import React from "react";
import { Link } from "react-router-dom";

const Header = ({ logged }) => {
  return (
    <div>
      <div className="header">
        <img
          className="head-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png"
          alt="Logo"
        />
        {logged ? (
          <Link to="/signup" className="header-login">
            Logout
          </Link>
        ) : (
          <Link to="/login" className="header-login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
