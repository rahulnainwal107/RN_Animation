import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import Initial from "./src/navigations/Initial";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Initial />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
