import React,{useState,createContext,useEffect,useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {AuthenticationContext} from '../../services/authentication/authentication.context'

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({children})=>{
   const{isAuthenticated:user} = useContext(AuthenticationContext)  
    const [favorites,setFavorites] = useState([])
    
    const storeFavorites = async (value,uid) => {  
        try {
          const jsonValue = JSON.stringify(value)
           await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue)
        } catch (error) {
          console.log("error storing",error)
        }
      }

      const loadFavorites = async (uid) => {
        try {
          const value = await AsyncStorage.getItem(`@favorites-${uid}`)
          if(value !== null) {
            setFavorites(JSON.parse(value))
          }
        } catch(error) {
          console.log("error loading",error)
        }
      }
      
    
      

    const add = (restaurant)=>{
        setFavorites([...favorites,restaurant])
    }

    const remove = (restaurant)=>{
        const newFavoriteItems= favorites.filter(item=>item.placeId!==restaurant.placeId)
        setFavorites(newFavoriteItems)
    }

    useEffect(()=>{
      if(user && user.uid){
        loadFavorites(user.uid)       
      }
   
    },[user])

    useEffect(()=>{
      if(user && user.uid && favorites.length){
        storeFavorites(favorites,user.uid)
      }
     
    },[favorites,user])

    return(
        <FavoriteContext.Provider value={{
            favorites,
            addToFavorites:add,
           removeFromFavorites:  remove  
        }}>
         {children}
        </FavoriteContext.Provider>
    )
}