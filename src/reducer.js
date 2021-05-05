
// this is how the state in the beggining looks like, thhe initial state
// in the beggining there is nothing happpening there, the user is none, there are no playlists and so on
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing
    token: "BQBYg6G8331Al5uCI8OpRY0cm2g2pb2kwvsTVvziA1o0iRoqOoFWa8RWLHvWj5TrbEcvN5XhAVpLIYIT_xKfSd0FKLiyr7dMyT6upiUr0ROqnnozAG5nu82mLRR1QSmSjH9OMkxydJYzLGJh3yv2CwWh4EQieAHbhK1sy6SYzYLOJzeT",
};

// state is how the data layer currently looks like, and the action is how we manipulate it
// action set the current item what we are listening and so on
const reducer = (state, action) => {

    // reducer listens for the dispatching actions
    // he coughts up the action type and goes to that action tpe

    console.log('🚀', action);

    // we push the user to the data layer, meaning we dispatch the action with type and the payload, this action type is setuser
    // reducer just sits here and listens for the action to happen
    // then you receive ac action with type SET_USER you want to return the new state user
    switch (action.type) {
        case 'SET_USER':
            return {
                // we keep everything was in the previrous state and update the following
                ...state,
                // update the user, with the info what was in the user object, in the payload which was dispatched to the reducer
                // in this case, takes everything what is in the state, and updates the user with the data from dispatched payload
                user: action.user

            }
        // we listen for the action with type SET_TOKEN to setup the token
        case 'SET_TOKEN':
            return {
                // we return the previrous items in the state, and update the following
                ...state,
                token: action.token
            }
        //     if the dispatch type is not anything from above, it is going to just return the state, that is all
        default:
            return state
    }
}

export default reducer;