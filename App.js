import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {View,Text} from 'react-native'
import { ThemeProvider } from "styled-components/native";
import {theme} from './src/infrastructure/theme'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'  

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


 import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screens.js'
 import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context'

 function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Maps!</Text>
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


//statusBar.currentHeight is only applying to android
//because the statusBar has different height in different devices.
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if(!oswaldLoaded||!latoLoaded){
    return null;
  }

  const Tab = createBottomTabNavigator();
  return (  
    <>
     <ThemeProvider theme={theme}>
       <RestaurantsContextProvider>
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          > 
                  <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
                  <Tab.Screen name="Map" component={MapScreen}/>
                  <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


