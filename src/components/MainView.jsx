import React from "react";
import { useLocation } from "react-router-dom";
import menuData from "../data/menuData";

const MainView = () => {
  const location = useLocation();

  const currentPage = menuData
    .flatMap((group) => group.items)
    .find((item) => item.path === location.pathname);

  return (
    <div className="main-view">
      <iframe
        src={currentPage?.url || menuData[0].items[0].url}
        title="content-frame"
        frameBorder="0"
      />
    </div>
  );
};

export default MainView;
