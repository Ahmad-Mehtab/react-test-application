import React, { useState } from 'react';
import Tab from './Tab';
import './../style/TabBar.css';
import AddressBar from './AddressBar';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Google', 'Causes v6'];

  return (
    <div className="tab-bar">
      <div className="tabs-container">
        {tabs?.map((title, index) => (
          <Tab
            key={index}
            title={title}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <AddressBar />
    </div>
  );
};

export default TabBar;