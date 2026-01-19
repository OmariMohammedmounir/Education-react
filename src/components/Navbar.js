import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="EduPlatform Logo" className="logo" />
        <span>EduPlatform</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {/* Courses visible only if logged in */}
        {token && <li><Link to="/courses">Courses</Link></li>}

        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {!token ? (
          <>
            <li>
              <Link to="/login">
                <button className="btn-login">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="btn-signup">Sign Up</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-user">
              Hi, {user?.name}
            </li>
            <li>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
