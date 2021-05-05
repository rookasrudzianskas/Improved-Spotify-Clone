import React from 'react';
import "./styles/Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useDataLayerValue} from "../DataLayer";


const Header = () => {
    // we are accessing the data layer, to receive the needed info
    const [{ user }, dispatch] = useDataLayerValue();

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
                {/* we go to the user object in data layer and get the image url first one*/}
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                {/* we go to the usr oberject from the data layer, adn get the display name*/}
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;
