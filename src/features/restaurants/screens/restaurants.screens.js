import React from 'react';
import {Searchbar} from "react-native-paper"

import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import {SafeArea,SearchContainer,RestaurantListContainer} from './restaurants.screens.styles'


 const RestaurantsScreen = ()=>{
   return(
    <SafeArea>
        <SearchContainer >
          <Searchbar placeholder="search"/>
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantsInfoCard/>
        </RestaurantListContainer>
    </SafeArea>
)
 }

 export default RestaurantsScreen;



