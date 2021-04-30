import React,{useState,createContext,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'



export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({children})=>{
    const [favorites,setFavorites] = useState([])

    const storeFavorites = async (value) => {   
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@favorites', jsonValue)
        } catch (error) {
          console.log("error storing",error)
        }
      }

      const loadFavorites = async () => {
        try {
          const value = await AsyncStorage.getItem('@favorites')
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
      loadFavorites()   
    },[])

    useEffect(()=>{
      storeFavorites(favorites)
    },[favorites])

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