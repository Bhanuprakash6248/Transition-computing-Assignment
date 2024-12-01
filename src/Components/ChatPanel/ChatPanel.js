import React from "react";
import { Chrono } from "react-chrono";

import { IoIosClose } from "react-icons/io";
import {assets} from "../../Assets/Assets"
import "./ChatPanel.css"

const ChatPanel = () => {
  const items = [
    {
      title: "9:08 PM",
      cardTitle: "Rachel Adams",
      cardSubtitle: "Received By WhatsApp",
      cardDetailedText:
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placaret maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.",
    },
    {
      title: "9:08 PM",
      cardTitle: "You",
      cardSubtitle: "Sent By WhatsApp",
      cardDetailedText:
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placaret maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.",
    },
  ];

  return (
    <div className="home-center-container">
      {/* Header Section */}
      <div className="home-center-container-header">
        <div className="home-center-container-tabs">
          <span>Conversation</span>
          <span>
            Address Update <IoIosClose />
          </span>
          <span>
            Fee Reversal <IoIosClose />
          </span>
          <span>
            Retail Onboarding <IoIosClose />
          </span>
        </div>
        <button className="home-center-container-escalate">Escalate</button>
      </div>

      {/* Conversation Section */}
      <div className="home-center-container-timeline">
        <div className="homecenter-buttons-container" >
          <button>conversion</button>
          <button>Attachment</button>
        </div>
        <Chrono
          items={items}
          mode="VERTICAL"
          hideControls={true} 
          lineStyle={{ stroke: "black", strokeDasharray: `5,5` }}
          theme={{
            primary: "#007bff",
            secondary: "white",
            cardBgColor: "#f9f9f9",
            cardForeColor: "#333",
          }}
        >
        </Chrono>
      </div>

      {/* Input Section */}
      <div className="home-center-container-input-section">
        <div className="home-center-container-input-buttons">
          <div className="input-container">
            <input type="checkbox" className="input-check-box" checked />
            <label>SMS</label>
          </div>
          <div className="input-container">
            <input type="checkbox" className="input-check-box" />
            <label className="active">WhatsApp</label>
          </div>
          <div className="input-container">
            <input type="checkbox" className="input-check-box" checked />
            <label>Email</label>
          </div>
        </div>
        <div className="home-center-container-input-area">
          <input type="text" placeholder="Type a message..." className="panelInput"/>
          <img
            src={assets.clipboard}
            className="icon-search-side"
            alt="icon"
          />
          <button className="home-center-container-send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;