import React from "react";
import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* left side */}
        <div>Logo</div>
        <div>
            <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
            <Link to="/students">Students</Link>
        </div>
    </>
  );
}

export default Sidebar;
