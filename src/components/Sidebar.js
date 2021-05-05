import React from 'react';
import "./styles/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./SidebarOptions";
import {useDataLayerValue} from "../DataLayer";

const Sidebar = () => {
    // we access the data layer to get all the playlist
    // we are getting just the playlist not all the datalayer
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            {/* passing the icons and the title to the sidebar option component     */}
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {/* we go per the playlist object, map per each one, and output to the screen the title per each iteration*/}
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}


        </div>
    );
};

export default Sidebar;
