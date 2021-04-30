import React,{useState,createContext} from 'react';
import * as firebase from 'firebase'

import {loginRequest} from './authentication.service'

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider=({children})=>{
    const[isLoading,setIsLoading] = useState(false)
    const[user,setUser] = useState(null)
    const[error,setError] = useState(null)

    const onLogin = (email,password)=>{
     setIsLoading(true)
     loginRequest(email,password)       
     .then((user)=>{
         setIsLoading(false)
         setUser(user)
     })
     .catch((error)=>{
         setIsLoading(false)
         setError(error)
     })
    }
    return(
        <AuthenticationContext.Provider value={{
            user,
            isLoading,
            error,
            onLogin,
        }}>
         {children}
        </AuthenticationContext.Provider>
    )
}