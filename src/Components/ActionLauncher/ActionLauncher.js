import React from "react";

import { assets } from "../../Assets/Assets";
import "./ActionLauncher.css"

const ActionLauncher = () => {
  return (
    <div className="action-launcher">
      <div>
        <h1 className="heading">Action Launcher</h1>
      </div>

      <hr className="hrline" />
      <div className="down-con">
        <div className="search-input">
          <img src={assets.search} alt="search-img"className="image"/>
          <input type="text" placeholder="Search actions..." />
        </div>
        <div className="button-container">
          <button className="action-button1 add">
            <img src={assets.addBtn} alt="addbtn-icon" className="vector"/>
            Add Action
          </button>
          <button className="action-button secondary">Fee Reversal</button>
          <button className="action-button secondary">Retail Onboarding</button>
          <button className="action-button secondary">Address Update</button>
        </div>
      </div>
    </div>
  );
};

export default ActionLauncher;