import './App.css';
import Login from "./components/Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./components/spotify";

function App() {
    // we store the token in the state
    const [token, setToken] = useState(null)

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
            setToken(_token)
        }
        console.log("I HAVE THE TOKEEEN 🚀", _token)
    }, []);



  return (
    <div className="app">

    {/*    Spotify logo    */}
    {/*    Login with spotify button    */}
        <Login />
    </div>
  );
}

export default App;
