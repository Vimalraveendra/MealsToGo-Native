import React from 'react';
import {SafeAreaView,View,Text,StyleSheet,StatusBar} from 'react-native'
import {Searchbar} from "react-native-paper"

import RestaurantsInfo from '../components/restaurants-info.component'

 const RestaurantsScreen = ()=>{
   return(
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
       <Searchbar placeholder="search"/>
    </View>
      <View style={styles.list}>
      <RestaurantsInfo/>
      </View>
    </SafeAreaView>
)
 }

 export default RestaurantsScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop: StatusBar.currentHeight,
    },
    search: { 
      padding: 10,
    },
    list: {
      flex: 1,
      padding: 10,
      backgroundColor:'blue'
    },
  });