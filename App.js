import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

 import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screens.js'
//statusBar.currentHeight is only applying to android
//because the statusBar has different height in different devices.
export default function App() {
  return (
    <>
      <RestaurantsScreen/>
      <ExpoStatusBar style="auto" />
    </>
  );
}


