import React from 'react';
import "./styles/Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>

            <div className="header__right">
                <Avatar alt="" src="" />
                <h4>Rokas Rudzianskas</h4>
            </div>
        </div>
    );
};

export default Header;
