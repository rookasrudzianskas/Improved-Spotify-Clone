import React from 'react';
import "./styles/Body.css";
import Header from "./Header";

const Body = ({ spotify }) => {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src="https://i.pinimg.com/originals/cc/f7/b2/ccf7b23b67fc46919be6ac07634d5bfc.jpg" alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description</p>
                </div>
            </div>

        </div>
    );
};

export default Body;
