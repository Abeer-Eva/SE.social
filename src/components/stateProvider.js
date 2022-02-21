import React, {createContext, useContext, useReducer } from 'react'

export const StateContext = createContext(); //förbereder datan

export const StateProvider =({ reducer, initialState, children }) =>( //HOC för att wrappa vår app
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext) // när vi vill ta något från datan använder vi useStateValue hooken