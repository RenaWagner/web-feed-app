import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="mt-5 mb-3">
      <NavLink
        exact
        to="/feed"
        className="btn btn-outline-success mr-5"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        News Feeds
      </NavLink>
      <NavLink
        exact
        to="/about"
        className="btn btn-outline-success mr-5"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        About
      </NavLink>
    </div>
  );
}
