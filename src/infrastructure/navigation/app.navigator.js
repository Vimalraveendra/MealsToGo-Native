import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'  

import RestaurantsNavigator from './restaurants.navigator'
import MapScreen from '../../features/map/screens/map.screen'
import SettingsNavigator from './settings.navigator'


import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context'
import {LocationContextProvider} from '../../services/location/location.context.js'
import { FavoriteContextProvider } from "../../services/favorite/favorite.context";



  
 
  const TAB_ICON = {
    Restaurants:'ios-restaurant',
    Map:'ios-map',
    Settings:'ios-settings'
  }
  
  
  const createScreenOptions=({route})=>{
    const iconName=TAB_ICON[route.name]
    return{
    tabBarIcon:({size,color})=>(
       // You can return any component that you like here!
     <Ionicons name={iconName} size={size} color={color} />
    )
  }
  } 

  const Tab = createBottomTabNavigator();

const AppNavigator= ()=>{
return (
<FavoriteContextProvider>
<LocationContextProvider>
<RestaurantsContextProvider>
<Tab.Navigator
screenOptions={createScreenOptions}
tabBarOptions={{
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}}
> 
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator}/>
      <Tab.Screen name="Map" component={MapScreen}/>
      <Tab.Screen name="Settings" component={SettingsNavigator}/>
</Tab.Navigator>
</RestaurantsContextProvider>
</LocationContextProvider>
</FavoriteContextProvider>

    )
}

export default  AppNavigator;