import React,{useContext} from 'react';
import {Searchbar,ActivityIndicator,Colors} from "react-native-paper"
import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import {SafeArea,SearchContainer,RestaurantList} from './restaurants.screens.styles'
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context'


 const RestaurantsScreen = ()=>{
   const restaurantsContext = useContext(RestaurantsContext)
   const{restaurants,isLoading,error} = restaurantsContext
   return(
    <SafeArea>
        <SearchContainer >
          <Searchbar placeholder="search"/>
        </SearchContainer>
        {
          isLoading ?<ActivityIndicator animating={true} color={Colors.amber100} size={75} style={{flex:1}}/>:
         <RestaurantList
          data={restaurants}
          renderItem={({item})=><RestaurantsInfoCard restaurant={item}/>}
          keyExtractor={(item,index)=>item.name .toString()} 
         /> 
        } 
    </SafeArea> 
)
 }

 export default RestaurantsScreen;



