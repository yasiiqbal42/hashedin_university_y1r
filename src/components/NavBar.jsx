import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../resource/HashedIn_Logo.jpeg";
import cart from "../resource/cart_icon.png";
import profile_icon from "../resource/profile_icon.png";

export default function NavBar(props) {
  return (
    <div className="navbar">
      <div>
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-container">
        <div>
          {" "}
          <NavLink
            // activeClassName="active"
            className="navlink"
            to="/courses"
          >
            COURSES
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink className="navlink" to="/my_wishlist">
            MY WISHLIST
          </NavLink>
        </div>
        <div className="icon">
          {" "}
          <NavLink to="/my_cart">
            <img src={cart} alt="" />
          </NavLink>
        </div>
        <div className="icon">
          {" "}
          <NavLink to="/my_profile">
            <img src={profile_icon} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
