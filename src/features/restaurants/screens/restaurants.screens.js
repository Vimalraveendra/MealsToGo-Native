import React,{useContext} from 'react';
import {ActivityIndicator,Colors} from "react-native-paper"
import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import {SafeArea,RestaurantList} from './restaurants.screens.styles'
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context'

import Search from '../components/search.component'

 const RestaurantsScreen = ({navigation})=>{  
   const restaurantsContext = useContext(RestaurantsContext)
   const{restaurants,isLoading} = restaurantsContext
   return(
    <SafeArea>
        <Search />
        {
          isLoading ?<ActivityIndicator animating={true} color={Colors.amber100} size={75} style={{flex:1}}/>:
         <RestaurantList
          data={restaurants}
          renderItem={({item})=><RestaurantsInfoCard restaurant={item} navigation={navigation} /> }
          keyExtractor={(item,index)=>item.name .toString()} 
         /> 
        } 
    </SafeArea>   
)
 }

 export default RestaurantsScreen;



