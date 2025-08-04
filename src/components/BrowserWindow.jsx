import React, { useState } from 'react';
import WindowControls from './WindowControls';
import './../style/BrowserWindow.css';
import TabBar from './TabBar';

const BrowserWindow = () => {
  return (
    <div className="browser-window">
      <div className="window-header">
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