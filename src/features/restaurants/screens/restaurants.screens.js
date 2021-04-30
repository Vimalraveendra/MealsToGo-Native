import React,{useContext,useState} from 'react';
import {ActivityIndicator,Colors} from "react-native-paper"
import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import {SafeArea,RestaurantList} from './restaurants.screens.styles'

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context'
import {FavoriteContext} from '../../../services/favorite/favorite.context'

import FavoriteBar from '../../../components/favorite/favorite-bar.component'

import Search from '../components/search.component'
import { TouchableOpacity } from 'react-native';

 const RestaurantsScreen = ({navigation})=>{  
   const{restaurants,isLoading}  = useContext(RestaurantsContext);
   const{favorites} = useContext(FavoriteContext);
   const[isToggled,setIsToggled] = useState(false)

   return(
    isLoading?<ActivityIndicator animating={true} color={Colors.amber100} size={75} style={{flex:1}}/>:
    <SafeArea>
        <Search isFavoriteToggled={isToggled} onFavoriteToggle={()=>setIsToggled(!isToggled)}/>
        {isToggled  &&
           <FavoriteBar favorites={favorites} navigation={navigation}/>  
           }
        {
       
         <RestaurantList
          data={restaurants}
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
      }
        
    </SafeArea>   
)
 }

 export default RestaurantsScreen;



