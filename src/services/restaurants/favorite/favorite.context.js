import React,{useState,createContext} from 'react';


export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({children})=>{
    const [favorites,setFavorites] = useState([])

    const add = (restaurant)=>{
        setFavorites([...favorites,restaurant])
    }

    const remove = (restaurant)=>{
        const newFavoriteItems= favorites.filter(item=>item.placeId!==restaurant.placeId)
        setFavorites(newFavoriteItems)
    }
    return(
        <FavoriteContext.Provider value={{
            favorites,
            addToFavorites:add,
           removeFromFavorites: remove  
        }}>
         {children}
        </FavoriteContext.Provider>
    )
}