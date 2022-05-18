import React from "react";
import logo from "../resource/react_logo.png";

export default function ReactTile({ pathname }) {
  let name = "Discover Latest Courses on React";
  if (pathname === "/my_wishlist") {
    name = "My Wishlist";
  } else if (pathname === "/my_cart") {
    name = "Shopping";
  } else if (pathname === "/my_profile") {
    name = "My Profile";
  } else {
    name = "Discover Latest Courses on React";
  }

  return (
    <div className="react-tile">
      <p>{name}</p>
      <img src={logo} alt="" />
    </div>
  );
}
