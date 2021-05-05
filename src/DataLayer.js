import React, {Children, createContext, useContext, useReducer} from "react";

// preparring the data llayer
export const DataLayerContext = createContext();

// this is actual datalayer which wraps the app and returns
// the children is what is wrapped by the datalayer, the app
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);