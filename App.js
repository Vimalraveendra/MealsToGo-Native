import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import {Searchbar} from "react-native-paper"

//statusBar.currentHeight is only applying to android
//because the statusBar has different height in different devices.
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
      <View style={styles.search}>
         <Searchbar placeholder="search"/>
      </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
      <StatusBar style="auto" />
    </>
  );
}

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
    backgroundColor: "red",
    padding: 10,
  },
});
