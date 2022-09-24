// In App.js in a new project

import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Buttons from "../screens/Buttons";
import Animation1 from "../screens/Animation1";
import Animation2 from "../screens/Animation2";
import Animation3 from "../screens/Animation3";
import Animation4 from "../screens/Animation4";
import Animation5 from "../screens/Animation5";
import Animation6 from "../screens/Animation6";
import Animation7 from "../screens/Animation7";
import Animation8 from "../screens/Animation8";
import Animation9 from "../screens/Animation9";

const Stack = createNativeStackNavigator();

function Initial() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buttons" component={Buttons} />
      <Stack.Screen name="Animation1" component={Animation1} />
      <Stack.Screen name="Animation2" component={Animation2} />
      <Stack.Screen name="Animation3" component={Animation3} />
      <Stack.Screen name="Animation4" component={Animation4} />
      <Stack.Screen name="Animation5" component={Animation5} />
      <Stack.Screen name="Animation6" component={Animation6} />
      <Stack.Screen name="Animation7" component={Animation7} />
      <Stack.Screen name="Animation8" component={Animation8} />
      <Stack.Screen name="Animation9" component={Animation9} />
    </Stack.Navigator>
  );
}

export default Initial;
