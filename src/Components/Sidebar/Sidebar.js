import React, { useState } from "react";
import {sidebarContent,assets} from "../../Assets/Assets.js"
import "./Sidebar.css";


const Sidebar = (props) => {
  const [sideArrowbtn,setSideArrowbtn] = useState(false)
  const {handleSidebar} = props

  const handleArrowBtn = ()=>{
    handleSidebar(setSideArrowbtn,sideArrowbtn)
    setSideArrowbtn((prev)=>!prev);
  }
  const sideActive = sideArrowbtn ? "sideActive":""
  const sideText = sideArrowbtn ?"hidetext":""
  
  return (
    <div className="sidebar-con ">
      <aside className={`sidebar ${sideActive}`}>
        <img src={assets.mainLogo} alt="main-logo"  className="main-logo"/>
        <ul className="sidebar-menu">
          {sidebarContent.map((item, index) => (
            <li key={index} className="sidebar-item">
              <img src={item.image} className="sidebar-img" alt="sidebar-img" />
              <p className={sideText}>{item.name}</p>
              
            </li>
          ))}
        </ul>
      </aside>
      <div className="sidebar-arrow-con"><span className="side-arrow" onClick={handleArrowBtn}>{sideArrowbtn === true ? ">":"<" }</span></div>

    </div>

  );
};

export default Sidebar;
