import React from 'react';
import NavigationButton from './NavigationButton.jsx';
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiRefreshCw, 
  FiLock, 
  FiStar,
  FiMoreVertical 
} from 'react-icons/fi';
import './../style/AddressBar.css';

const AddressBar = () => {
  return (
    <div className="address-bar-container">
      <div className="navigation-buttons">
        <NavigationButton disabled><FiArrowLeft size={16} /></NavigationButton>
        <NavigationButton disabled><FiArrowRight size={16} /></NavigationButton>
        <NavigationButton><FiRefreshCw size={16} /></NavigationButton>
      </div>
      
      <div className="address-bar">
        <div className="security-icon">
          <FiLock size={14} />
        </div>
        <input 
          type="text" 
          placeholder="https://example.com" 
          className="url-input"
          readOnly
        />
        <div className="address-bar-icons">
          <button className="icon-button"><FiStar size={16} /></button>
          <button className="icon-button"><FiMoreVertical size={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;