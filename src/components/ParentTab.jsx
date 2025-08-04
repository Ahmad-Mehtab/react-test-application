import React, { useState } from "react";
import Tab from "./Tab";


const ParentTab = () => {
  const [tabs, setTabs] = useState([
    { id: 1, label: "Tab 1", isActive: true },
    { id: 2, label: "Tab 2", isActive: false },
  ]);

  const handleTabClick = (id) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      isActive: tab.id === id,
    })));
  };

  const handleCloseTab = (id) => {
    setTabs(tabs.filter(tab => tab.id !== id));
  };

  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          label={tab.label}
          isActive={tab.isActive}
          onClick={() => handleTabClick(tab.id)}
          onClose={() => handleCloseTab(tab.id)}
        />
      ))}
    </div>
  );
};

export default ParentTab;