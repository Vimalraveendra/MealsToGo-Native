import firebase from 'firebase';
import React,{useState,createContext} from 'react';


import {loginRequest,registerRequest} from './authentication.service'

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider=({children})=>{
    const[isLoading,setIsLoading] = useState(false)
    const[user,setUser] = useState(null)
    const[error,setError] = useState(null)

    // checking user authentication changed or not
    firebase.auth().onAuthStateChanged(userAuth=>{
        if(userAuth){       
            setUser(userAuth)
            setIsLoading(false)
        }else{
            setIsLoading(false)
        }
    })

    const onLogin = (email,password)=>{
     setIsLoading(true)
     loginRequest(email,password)       
     .then((userObj)=>{
         setIsLoading(false)
         setUser(userObj)
     })
     .catch((error)=>{
         setIsLoading(false)
         setError(error.toString())

     })
    }

    const onRegister=(email,password,repeatedPassword)=>{

        if(password!==repeatedPassword){
            setError("Error:Passwords do not match")
            return;
        }
       setIsLoading(true)
        registerRequest(email,password)
        .then((userObj)=>{
            setIsLoading(false)
            setUser(userObj)
        })
        .catch((error)=>{
            setIsLoading(false)
            setError(error.toString())
   
        }) 

    }

     const onLogout= ()=>{
         firebase.auth().signOut()
         .then(()=>{
             setUser(null)
             setError(null)
         })
     }

    return(
        <AuthenticationContext.Provider value={{
            isAuthenticated:user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogout
        }}>
         {children}
        </AuthenticationContext.Provider>
    )
}