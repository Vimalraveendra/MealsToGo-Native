import React,{useContext} from 'react';
import {View,Text,Button} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'  

import RestaurantsNavigator from './restaurants.navigator'
import MapScreen from '../../features/map/screens/map.screen'

import {AuthenticationContext} from '../../services/authentication/authentication.context'

import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context'
import {LocationContextProvider} from '../../services/location/location.context.js'
import { FavoriteContextProvider } from "../../services/favorite/favorite.context";

function SettingsScreen() {
   const{onLogout} = useContext(AuthenticationContext)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button  title="Logout" onPress={onLogout}/>
      </View>
    );
  }
  
 
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
      <Tab.Screen name="Settings" component={SettingsScreen}/>
</Tab.Navigator>
</RestaurantsContextProvider>
</LocationContextProvider>
</FavoriteContextProvider>

    )
}

export default  AppNavigator;