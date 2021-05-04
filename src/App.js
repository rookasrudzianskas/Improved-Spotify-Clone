import './App.css';
import Login from "./components/Login";
import {useEffect} from "react";
import {getTokenFromUrl} from "./components/spotify";

function App() {

    //    run the code on the condition
    useEffect(() => {
        // code, the code is going to
        // then we redirect from the login, the app component runs for the first time it fires up the getTokeFromUrl function
        // the app loads for the first time, the token is undefined, but then I click agree on the login,
        // the app component gets rerendered and we run the useEffect one more time, in this case it gets token from the url
        // and returns in
        const token = getTokenFromUrl();
        console.log("I HAVE THE TOKEEEN 🚀", token)
    })



  return (
    <div className="app">

    {/*    Spotify logo    */}
    {/*    Login with spotify button    */}
        <Login />
    </div>
  );
}

export default App;
