// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// where we are going to send the user to make the login
//spotify takes care of login, and then we go
// I click login andd it throws me to this page
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "77b7d9ed0a404694b7c7b0dc75d10051";
// as soon as I login, I go back to this website below ✍️
const redirectUri = "http://localhost:3000/";
// that screen what we are going to show after the login, will let the user to do these things
// we give the user some permissions to do something, I will be able to go and see what is currently playing,
// go and check my recently played music, get the information and so on.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// this is going to get access token from the response url
export const getTokenFromUrl = () => {
    // this is going to go the url what we have returned back, and
    // go to hash /300/#/ it goes to the location of the url, straight to the position of hash
    // get the first on the string, the substring does that
    // and then split, by the &, because we do not need any extra parameters get passed to theaccess token
    // with substring we take first one, till the first & symbol, and then reduce it. We split the accessToke=34343 to two parts by the = symbol
    //
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // imagine we are having the url #accessToken=mysupersecretkey&name=rokas
            // go to the first one, and split it by the = symbol
            // the initial[parts[0]] takes the first one
            let parts = item.split('=')
            // go to the initial array which is returned from the item.split, (divided one)
            // and for the access token, which is the item 0 decode URI which is the access token key, the element 1, after the split by =
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {});
}

// ? means we are adding the parameter to the web address
// we give all the details from above defined variables, and then comes the scopes, so we take all of them and join by space,
// in this case the ASCII code for space is %20, and it joins all the array elements from scope by space
// go thought all the spaces and add the one space per each one
// response token is then you login, you receive the token, which is the string, which represents that you are authenticated, and you are
//what you are
// show_dialog=true this is the whole prompt and gives that sort of experiace
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;










