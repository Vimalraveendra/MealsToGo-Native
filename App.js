import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {theme} from './src/infrastructure/theme'


import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


 import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context'
 import {LocationContextProvider} from './src/services/restaurants/location/location.context.js'
  
 import Navigation from './src/infrastructure/navigation/naviagation.js'
import { FavoriteContextProvider } from "./src/services/restaurants/favorite/favorite.context";

 




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

 
  return (  
    <>
     <ThemeProvider theme={theme}>
      <FavoriteContextProvider>
       <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation/>
        </RestaurantsContextProvider>
       </LocationContextProvider>
      </FavoriteContextProvider>
     </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


