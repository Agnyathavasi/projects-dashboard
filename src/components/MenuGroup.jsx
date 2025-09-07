import React from "react";
import { Link } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";

const MenuGroup = ({ group, setMenuGroups, toggleSidebar }) => {
  const updateItems = (newItems) => {
    setMenuGroups((prev) =>
      prev.map((g) => (g.id === group.id ? { ...g, items: newItems } : g))
    );
  };

  return (
    <div className="menu-group">
      <div className="group-header">
        <span className="drag-handle">≡</span>
        <h3>{group.title}</h3>
      </div>

      <ReactSortable
        list={group.items}
        setList={updateItems}
        group="shared"
        animation={150}
        className="menu-items"
      >
        {group.items.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="menu-item"
            onClick={toggleSidebar}
          >
            {item.name}
          </Link>
        ))}
      </ReactSortable>
    </div>
  );
};

export default MenuGroup;
