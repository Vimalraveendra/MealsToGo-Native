import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
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


 import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context.js'
 import {LocationContextProvider} from './src/services/location/location.context.js'
 import { FavoriteContextProvider } from "./src/services/favorite/favorite.context";
 import {AuthenticationContextProvider} from './src/services/authentication/authentication.context.js'
  
 import Navigation from './src/infrastructure/navigation/naviagation.js'


import * as firebase from 'firebase';


  // Your web app's Firebase configuration  
  const firebaseConfig = {
    apiKey: "AIzaSyDuy5kqwTZudQ-AK_LmQgQrLcgMqKUuZCM",
    authDomain: "mealstogo-b8f91.firebaseapp.com",
    projectId: "mealstogo-b8f91",
    storageBucket: "mealstogo-b8f91.appspot.com",
    messagingSenderId: "834858695870",
    appId: "1:834858695870:web:95e0a616e964b41c5b32ef"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }



//statusBar.currentHeight is only applying to android
//because the statusBar has different height in different devices.
export default function App() {
  const [isAuthenticated ,setIsAuthenticated] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      firebase
      .auth()
      .signInWithEmailAndPassword('john@gmail.com','test123 ')
     .then( (user)=> {
       setIsAuthenticated(true)
     }).catch((error)=>{
       console.log(error)
     })
    },2000)
   },[]);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if(!oswaldLoaded||!latoLoaded){
    return null;
  }

if(isAuthenticated)return null;
 
  return (  
    <>
     <ThemeProvider theme={theme}>
     <AuthenticationContextProvider>
      <FavoriteContextProvider>
       <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation/>
        </RestaurantsContextProvider>
       </LocationContextProvider>
      </FavoriteContextProvider>
      </AuthenticationContextProvider>
     </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


