import React from "react";
import "./SideBarOption.css";
const SideBarOptions = ({ title, Icon }) => {
  return (
    <div className="sideBarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h5>{title}</h5> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOptions;
