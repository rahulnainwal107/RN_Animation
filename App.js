import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Initial from "./src/navigations/Initial";

export default function App() {
  return (
    <NavigationContainer>
      <Initial />
    </NavigationContainer>
  );
}
