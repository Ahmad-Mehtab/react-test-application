import React from 'react';
import './../style/WindowControls.css';

const WindowControls = () => {
  return (
    <div className="window-controls">
      <button className="control minimize">-</button>
      <button className="control maximize">□</button>
      <button className="control close">×</button>
    </div>
  );
};

export default WindowControls;