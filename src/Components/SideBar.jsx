import React, { useState } from "react";
import "../CSS/SideBar.css";
import RoomsJSON from "../JSON/Rooms.json"
const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  let rooms = RoomsJSON.rooms.map(variable => {
    return (<Room {...variable} expands={isExpanded} ></Room>)
  })


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
              <a href="/">  <img src="../../public/icons/logo.png" /> </a>
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
          <div className="menu-item-div">
            {rooms}
          </div>
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


class Room extends React.Component {
  render() {
    return (
      <a
        className={this.props.expands ? "menu-item" : "menu-item menu-item-NX"}
        href={this.props.page}
      >
        <img className="menu-item-icon" src={this.props.icon} alt="" srcset="" />
        {this.props.expands && <p>{this.props.text}</p>}
      </a>

    )

  }

}

export default SideNavBar;
