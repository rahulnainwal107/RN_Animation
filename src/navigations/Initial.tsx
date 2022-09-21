// In App.js in a new project

import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Buttons from "../screens/Buttons";
import Animation1 from "../screens/Animation1";
import Animation2 from "../screens/Animation2";
import Animation3 from "../screens/Animation3";

const Stack = createNativeStackNavigator();

function Initial() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buttons" component={Buttons} />
      <Stack.Screen name="Animation1" component={Animation1} />
      <Stack.Screen name="Animation2" component={Animation2} />
      <Stack.Screen name="Animation3" component={Animation3} />
    </Stack.Navigator>
  );
}

export default Initial;
