import React,{useContext} from 'react';
import {Searchbar} from "react-native-paper"
import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import {SafeArea,SearchContainer,RestaurantList} from './restaurants.screens.styles'
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context'

 const RestaurantsScreen = ()=>{
   const restaurantsContext = useContext(RestaurantsContext)
   console.log("res",restaurantsContext)
   return(
    <SafeArea>
        <SearchContainer >
          <Searchbar placeholder="search"/>
        </SearchContainer>
         <RestaurantList
          data={restaurantsContext.restaurants}
          renderItem={()=><RestaurantsInfoCard/>}
          keyExtractor={(item)=>item.toString()} 
         /> 
          
        
    </SafeArea>
)
 }

 export default RestaurantsScreen;



