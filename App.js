import React from "react";
import { View,SafeAreaView,Platform,StatusBar } from "react-native";
import HomeScreen from "./screens/Home";


export default function App() {
  return(
    <View style={{flex:1}}>
      <SafeAreaView style={{marginTop:Platform.OS=="android"?StatusBar.currentHeight:0}}/>
      <HomeScreen/>
    </View>
  );
}

