import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainView from "./components/MainView";
import MobileHeader from "./components/MobileHeader";
import menuData from "./data/menuData";

function App() {
  const [menuGroups, setMenuGroups] = useState(menuData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <MobileHeader toggleSidebar={toggleSidebar} />
        <Sidebar
          menuGroups={menuGroups}
          setMenuGroups={setMenuGroups}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        {isSidebarOpen && (
          <div className="sidebar-backdrop" onClick={toggleSidebar} />
        )}
        <MainView />
      </div>
    </Router>
  );
}

export default App;
