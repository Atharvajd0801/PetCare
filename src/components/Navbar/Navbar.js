import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import placeholder from "../../Assets/profile-picture-placeholder.png";

function Navbar() {
  const navigates = useNavigate();
  const [click, setClick] = useState(false);
  const [drop, setdrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 100) {
      setdrop(false);
    } else {
      setdrop(true);
    }
  };
  const logoutuser = () => {
    localStorage.removeItem("username");
    navigates("/");
    setIsOpen(!isOpen);
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 100) {
      setdrop(true);
    } else {
      setdrop(false);
    }
  };
  const [showProfileDrop, setShowProfileDrop] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark px-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            PetCare
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav gap-md-4">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/foster-care">
                      Foster Care
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/doctor">
                      Veterinary
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products">
                      Shopping
                    </Link>
                  </li>
                </ul>
              </li>

              {!localStorage.getItem("username") && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {!localStorage.getItem("username") && (
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              )}

              {localStorage.getItem("username") && (
                <li className="d-flex gap-1">
                  <img
                    src={placeholder}
                    className="profile-Placeholder-img"
                    alt="placeHolder"
                  />
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {localStorage.getItem("username")}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" onClick={logoutuser}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
