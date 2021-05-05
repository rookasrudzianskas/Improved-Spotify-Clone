import React from 'react';
import "./styles/SongRow.css";

const SongRow = ({ track, playSong}) => {
    return (
        <div className="songRow" onClick={() => playSong(track.id)}>
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div className="songRow__info">
                <h1>{track.name}</h1>

                <p>
                    {/* this is going to go per each artist in the tracks objects.artists */}
                    {/*and going to join them, meaning per each iteration it goes per each artists, takes the name, and joins per , */}
                    {/* after that we have the album name from the track object too*/}
                    {/* basically the discover_weekly has the tracks object inside, the tracks object has the items object inside*/}
                    {/* then it goes per each one in this object in body.js and outputs the songrow, and it passes as the props*/}
                    {/* in that tracks.items each item info, which consists of name, artists[array], album.name and so on*/}
                    {/* in this case we take the props -> track.name, we map per each artists in that array and output the artist.name with joined function*/}
                    {/* and output the track.album.name which is also the object inside the track prop*/}
                    {/* in artist it cames as array so we take each item and join by the comma and space after to make in one line*/}
                    {track.artists.map((artist) => artist.name).join(", ")}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
};

export default SongRow;
