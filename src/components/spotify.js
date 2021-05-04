// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// where we are going to send the user to make the login
//spotify takes care of login, and then we go
// I click login andd it throws me to this page
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "77b7d9ed0a404694b7c7b0dc75d10051";
// as soon as I login, I go back to this website below ✍️
const redirectUri = "http://localhost:3000/";