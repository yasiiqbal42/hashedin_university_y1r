import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import ReactTile from "./ReactTile";

export default function Header(props) {
  const { pathname } = useLocation();
  return (
    <div className="header">
      <div>
        <NavBar />
      </div>
      <div className="tile">
        <ReactTile pathname={pathname} />
      </div>
    </div>
  );
}
