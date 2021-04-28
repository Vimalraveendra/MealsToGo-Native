import React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'  

import RestaurantsNavigator from './restaurants.navigator'
import MapScreen from '../../features/restaurants/map/screens/map.screen'


function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
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
<NavigationContainer>
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
</NavigationContainer>

    )
}

export default  AppNavigator;