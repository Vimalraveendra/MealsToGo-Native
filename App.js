import {StatusBar as ExpoStatusBar} from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform} from 'react-native';


export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}> 
      <View style={styles.green}>
        <Text>Search</Text>
      </View>
      <View style={styles.blue}>
        <Text>List</Text> 
      </View>
   
    </SafeAreaView>
    <ExpoStatusBar style='auto'/>
    <StatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:StatusBar.currentHeight
  },
  green:{
   backgroundColor:'green',

   padding:10 
  
  },
  blue:{
    flex:1,
    backgroundColor:'red',
  
    padding:10 
  }
});
