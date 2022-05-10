import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../image/logo.jpg'
function Navbar() {
  return (
    <div>
      <div className="container-fluid nav_bg">
          <div className="row">
              <div className="col-md-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="BC logo"></img>Bane Corportion
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName ="menu_active"
                  className="nav-link"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName ="menu_active" className="nav-link" to="/service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName ="menu_active" className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName ="menu_active" className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
              </li>
              {/* <li className="nav-item">
            <NavLink className="nav-link" to="/business">
              Business
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/health">
              Health
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/technology">
              Technology
            </NavLink>
          </li> */}
            </ul>

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
