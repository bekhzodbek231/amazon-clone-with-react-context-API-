// set up data layer
// WE NEED this to track the basket

import React, { createContext, useContext, useReducer } from 'react';

// this is the date layer
export const StateContext = createContext();


export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext);