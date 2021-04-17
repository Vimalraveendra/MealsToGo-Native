import React from 'react';
import {Searchbar} from "react-native-paper"
import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import {SafeArea,SearchContainer,RestaurantList} from './restaurants.screens.styles'


 const RestaurantsScreen = ()=>{
   return(
    <SafeArea>
        <SearchContainer >
          <Searchbar placeholder="search"/>
        </SearchContainer>
         <RestaurantList
          data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},]}
          renderItem={()=><RestaurantsInfoCard/>}
          keyExtractor={(item)=>item.name.toString()}
       
          
         /> 
          
        
    </SafeArea>
)
 }

 export default RestaurantsScreen;



