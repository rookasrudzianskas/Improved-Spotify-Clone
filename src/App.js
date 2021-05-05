import './App.css';
import Login from "./components/Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import {useDataLayerValue} from "./DataLayer";

// this is going to allow us to comunicate with spotify back and forward
const spotify = new SpotifyWebApi();

function App() {
    // we store the token in the state
    const [token, setToken] = useState(null);
    // dispatch  is the gun to shoot the action and change the data layer
    // we take the datalayer, destructure and take just the user, istead of all the info in the data layer
    const [{ user }, dispatch] = useDataLayerValue();

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
            // if there is a token, so we set it up to the token in the state, using setState
            setToken(_token);


            // giving the access token for the spotify api
            //here is the key to you, which will let you to get all the info from the spotify
            spotify.setAccessToken(_token);
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
                })
            });
        }
        console.log("I HAVE THE TOKEEEN 🚀", _token)
    }, []);

    console.log("DATA LAYER =========>", user);

  return (
    <div className="app">
        {/* this is ternary opearator, and we say if there is a token, we render the player page (component), if not,
        so we render the same login page*/}

        {
            token ? (
                <Player />
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
