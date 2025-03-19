import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import TetaZitaVeikia from "./TetaZitaVeikia";

export default function () {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/data">Data</NavLink>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
