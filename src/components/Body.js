import React from 'react';
import "./styles/Body.css";
import Header from "./Header";

const Body = ({ spotify }) => {
    return (
        <div className="body">
            <Header spotify={spotify} />

        </div>
    );
};

export default Body;
