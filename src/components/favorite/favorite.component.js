import React,{useContext} from 'react';
import {AntDesign} from '@expo/vector-icons'
import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'

import {FavoriteContext} from '../../services/restaurants/favorite/favorite.context'

const FavoriteButton =styled(TouchableOpacity)` 
position:absolute;
top:30px;
right:30px;
z-index:9; 
color:white;    
`;      

const Favorite = ({restaurant})=>{
   
    const {favorites,addToFavorites,removeFromFavorites} = useContext(FavoriteContext)
    const isFavorite = favorites.find(item=>item.placeId===restaurant.placeId)
    return(
    <FavoriteButton
    onPress={()=>!isFavorite?addToFavorites(restaurant):removeFromFavorites(restaurant)} 
    >
      <AntDesign 
      name={isFavorite?"heart":"hearto"} size={24} color={isFavorite?"red":"white"}/>
     </FavoriteButton>
    )
}

export default Favorite;