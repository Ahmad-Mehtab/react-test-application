import React from 'react';
import './../style/NavigationButton.css';

const NavigationButton = ({ children, disabled = false }) => {
  return (
    <button className={`nav-button ${disabled ? 'disabled' : ''}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default NavigationButton;