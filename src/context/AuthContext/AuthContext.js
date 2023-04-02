import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

// create our initial state which should be the current user and set it to null

const INITIAL_STATE={
    currentUser:null
}

// create our context here
export const AuthContext=createContext(INITIAL_STATE)

export const AuthContextProvider=({children})=>{

// use our reducer hook here
const [state, dispatch]=useReducer(AuthReducer, INITIAL_STATE)

return(
    <AuthContext.Provider value={{currentUser:state.currentUser, dispatch}}>{children}</AuthContext.Provider>
)

}