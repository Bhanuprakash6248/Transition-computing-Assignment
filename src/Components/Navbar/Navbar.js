import React from "react";
import "./Navbar.css";
import { assets } from "../../Assets/Assets";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="navbar-title">Chat/Feed Chat</p>
      </div>
      <div className="navbar-right">
        <img src={assets.home} alt="home-img" className="home-img"/>
        <button className="navbar-btn">Process Owner HOD</button>
        <span className="navbar-admin">Admin</span>
        <span className="admin-name">Panlak Bansal</span>
        <img
          src={assets.profile}
          alt="Profile"
          className="navbar-profile"
        />
          <img
          src={assets.settings}
          alt="settings-img"
          className="settings"
        />
        <img
          src={assets.logout}
          alt="logout-icon"
          className="logout-btn"
        />
        <span className="admin-name">Logout</span>
      </div>
    </nav>
  );
};

export default Navbar;
