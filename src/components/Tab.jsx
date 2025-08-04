import React from "react";
import "./../style/Tab.css";

const Tab = ({ label, isActive, onClose, onClick }) => {
  return (
    <div 
      className={`tab ${isActive ? "active" : ""}`} 
      onClick={onClick}
    >
      <span className="tab-label">{label}</span>
      {isActive && (
        <button className="tab-close" onClick={(e) => {
          e.stopPropagation(); // Prevents tab click when closing
          onClose();
        }}>
          ×
        </button>
      )}
    </div>
  );
};

export default Tab;