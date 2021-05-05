import React,{useContext} from 'react';
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';

import {FavoriteContext} from '../../../services/favorite/favorite.context'
import {SafeArea} from '../../../components/utility/safe-area.component'
import {Text} from '../../../components/typography/text.component'

import {RestaurantList} from '../../restaurants/screens/restaurants.screens.styles'
import RestaurantsInfoCard from '../../restaurants/components/restaurants-info-card.component'

const NoFavoriteArea =styled(SafeArea)`
 align-items:center;
 justify-content:center;
`;


export const FavoritesScreen = ({navigation})=>{
   const {favorites} = useContext(FavoriteContext)
    return  favorites.length?
    (
        <SafeArea>
        <RestaurantList
        data={favorites}
        renderItem={({item})=>{
          return(
          <TouchableOpacity onPress={()=>navigation.navigate("RestaurantsDetail",{restaurant:item})}>
          <RestaurantsInfoCard restaurant={item}  /> 
          </TouchableOpacity>
          )
        }
      }
        keyExtractor={(item,index)=>item.name .toString()} 
       /> 
        </SafeArea>
    ):(
        <NoFavoriteArea>
          <Text>No Favorites yet</Text>
        </NoFavoriteArea>
    )
}