import './App.css';
import Login from "./components/Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import {useDataLayerValue} from "./DataLayer";


// this goes in the following order, first it renders the app
// datalayer is null we accept the spotify login and get the token
// then it renders one more time app, and useEffect gets fired again, because wew have access token, we go to the if as true
// and by calling .getMe, we dispatch an action to the data layer to update the initial state with the user info
// we update the data layer using dispatch and in this way we receive the updated user object to the new data

// this is going to allow us to comunicate with spotify back and forward
const spotify = new SpotifyWebApi();

function App() {
    // dispatch  is the gun to shoot the action and change the data layer
    // we take the datalayer, destructure and take just the user, istead of all the info in the data layer
    const [{ user, token }, dispatch] = useDataLayerValue();

    //    run the code on the condition
    useEffect(() => {
        // code, the code is going to
        // then we redirect from the login, the app component runs for the first time it fires up the getTokeFromUrl function
        // the app loads for the first time, the token is undefined, but then I click agree on the login,
        // the app component gets rerendered and we run the useEffect one more time, in this case it gets token from the url
        // and returns in
        const hash = getTokenFromUrl();
        // this is going to go the url, and clear everything after the hash
        window.location.hash = "";
        // the token is inside the hash, and we access it, by going to hash object, and then accessing the token
        // we use _, to show that is is like temporary and the real one is then we set it to the state, and the state token is ther real one
        const _token = hash.access_token;

        if(_token) {
            // we are dispatching the action to store the token in the data layer
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })


            // giving the access token for the spotify api
            //here is the key to you, which will let you to get all the info from the spotify
            spotify.setAccessToken(_token);

            spotify.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            );

            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotify,
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });
            });

            // get users account
            spotify.getMe().then((user) => {
                // we get back the whole user object back.
                console.log("🤹", user);

                // we are going to shoot it to the data layer
                // we push the user to the data layer with action type
                dispatch({
                    // action type
                    type: 'SET_USER',
                    // we give the payload user object
                    user: user
                });
            });
            // we are getting the user playlists
            spotify.getUserPlaylists().then((playlists) => {
                // and dispatching the action with the playlists to update the data layer initial state
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });
            });

            // getting discover weekly, by my playlist id
            spotify.getPlaylist('37i9dQZEVXcEl1nnHivtq4').then((response) => {
                // then we receive the discover weekly response, the object with the discver weekly songs
                // we shoot the action to the reducer to update out discover weekly playlist with the new data
                // at this point it is going to be the case SET_DISCOVER_WEEKLY type and the response
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            })
        }
        console.log("I HAVE THE TOKEEEN 🚀", _token)
    }, [token, dispatch]);

    // console.log("DATA LAYER =========>", user);
    // console.log("TOKEN =========>", token);

  return (
    <div className="app">
        {/* this is ternary opearator, and we say if there is a token, we render the player page (component), if not,
        so we render the same login page*/}

        {
            token ? (

                // we pass the spotify object, in this there is all the user info
                <Player spotify={spotify} />
                // <Player />
            ) : (
                <Login />
            )
        }

    {/*    Spotify logo    */}
    {/*    Login with spotify button    */}
    </div>
  );
}

export default App;
