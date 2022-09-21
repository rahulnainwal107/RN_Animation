import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Initial from "./src/navigations/Initial";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <Initial />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
