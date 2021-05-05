import React from 'react';
import "./styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>Album and song details</p>
            </div>

            <div className="footer__center">
                <p>Player controles</p>
            </div>

            <div className="footer__right">
                <p>Volume controls</p>
            </div>

        </div>
    );
};

export default Footer;
