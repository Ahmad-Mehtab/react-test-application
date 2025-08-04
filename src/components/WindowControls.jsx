import React from "react";
import "./../style/WindowControls.css";

const WindowControls = () => {
  return (
    <div className="window-controls">
      <div className="minimize">
        <button className="control">-</button>
      </div>
      <div className="maximize">
        <button className="control ">□</button>
      </div>
      <div className="close">
        <button className="cross">×</button>
      </div>
    </div>
  );
};

export default WindowControls;
