import React, { useState } from 'react';
import WindowControls from './WindowControls';
import './../style/BrowserWindow.css';
import TabBar from './TabBar';

import ParentTab from './ParentTab';

const BrowserWindow = () => {
  return (
    <div className="browser-window">
      <div className="window-header">
        <div className="tabs-container">
       
          <ParentTab
            
          />
      
      </div>
        <WindowControls />
      </div>
      <TabBar />
      <div className="content-area">
        <p>App goes here</p>
      </div>
    </div>
  );
};

export default BrowserWindow;