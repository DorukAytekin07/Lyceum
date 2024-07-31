import React, { useState } from "react";
import "../CSS/SideBar.css";
const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Programing",
      icon: '../icons/programming.png'
    },
    {
      text: "Math",
      icon: "../icons/math.png",
    },
    {
      text: "Physics",
      icon: "../icons/physics.png",
    },
    {
      text: "Biology",
      icon: "../icons/biology.png",
    },
    {
      text: "Chemistry",
      icon: "../icons/chemistry.png",
    },
    {
      text: "Philosophy",
      icon: "../icons/philosophy.png",
    },
    
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <a href="/">  <h2>Academia</h2> </a>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
            >
              <img className="menu-item-icon" src={icon} alt="" srcset="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            {/*<img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcset=""
             />*/}
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Doruk Aytekin</p>
              <p className="nav-footer-user-position">Admin</p>
            </div>
          </div>
        )}
        {/*<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />*/}
      </div>
    </div>
  );
};

export default SideNavBar;
