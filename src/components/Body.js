import React from 'react';
import "./styles/Body.css";
import Header from "./Header";
import {useDataLayerValue} from "../DataLayer";

const Body = ({ spotify }) => {
    // we get accesss to the discover_weekly playlist
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                {/* this goes to the discover weekly data layer object and pulls the image[0], the first image url*/}
                {/* and puts to the source code*/}
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

        </div>
    );
};

export default Body;
