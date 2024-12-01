import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatPanel from "../../Components/ChatPanel/ChatPanel";
import ActionLauncher from "../../Components/ActionLauncher/ActionLauncher";
import CaseFavorite from "../../Components/CaseFavorite/CaseFavorite";
import Profile from "../../Components/Profile/Profile";
import Header from "../../Components/Header/Header"
import "./Dashboard.css";
import AskCatura from "../../Components/AskCatura/AskCatura";

const Dashboard = () => {
  let sideBarActive;
  const handleSidebar = (setSideArrowbtn,sideArrowbtn)=>{
    sideBarActive = sideArrowbtn === true ? "siderbar":"sidebar-Active "
    console.log(sideArrowbtn)
  }
  return (
    <div className="dashboard">

      <div className={sideBarActive}>
        <Sidebar handleSidebar={handleSidebar}/>
      </div>
      


      <div className="dashboard-main">
   
        <Navbar />
        <Header />

        <div className="dashboard-content">
          <div className="main-section">
          
            <Profile />
            <ChatPanel />
           
          </div>
          <div className="side-section">
            <AskCatura />
            <ActionLauncher />
            <CaseFavorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
