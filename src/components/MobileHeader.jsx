import React from "react";
// import { FaBars } from "react-icons/fa";

const MobileHeader = ({ toggleSidebar }) => {
  return (
    <div className="mobile-header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {/* <FaBars size={24} /> */}
        lowde
      </button>
      <div className="app-title">Navigation Menu</div>
    </div>
  );
};

export default MobileHeader;
