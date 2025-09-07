import React from "react";
import { ReactSortable } from "react-sortablejs";
import MenuGroup from "./MenuGroup";
// import { FaTimes } from "react-icons/fa";

const Sidebar = ({ menuGroups, setMenuGroups, isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-sidebar" onClick={toggleSidebar}>
        {/* <FaTimes size={20} />icon */}icon
      </button>
      <h1 style={{ marginBottom: "20px" }}>Projects</h1>
      <ReactSortable
        list={menuGroups}
        setList={setMenuGroups}
        handle=".drag-handle"
        animation={150}
      >
        {menuGroups.map((group) => (
          <MenuGroup
            key={group.id}
            group={group}
            setMenuGroups={setMenuGroups}
            toggleSidebar={toggleSidebar}
          />
        ))}
      </ReactSortable>
    </div>
  );
};

export default Sidebar;
