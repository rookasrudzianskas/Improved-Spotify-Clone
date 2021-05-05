import React from 'react';
import "./styles/SidebarOption.css";


const SidebarOption = ({ title, Icon }) => {
    return (
        <div className="sidebarOption">
            {/* If thre is an icon, we render the icon*/}
            {Icon && <Icon className="sidebarOption__icon" />}
            {/* if we have an icon, so I render the h4 title, if not so we render the p title*/}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
};

export default SidebarOption;
