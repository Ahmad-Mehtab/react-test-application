import React from 'react';
import './../style/Tab.css';

const Tab = ({ title, isActive, onClick }) => {
  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="tab-content">
        <span className="tab-title">{title}</span>
        {isActive && <div className="tab-underline"></div>}
      </div>
    </div>
  );
};

export default Tab;