// In App.js in a new project

import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Buttons from "../screens/Buttons";
import {
  Animation1,
  Animation2,
  Animation3,
  Animation4,
  Animation5,
  Animation6,
  Animation7,
  Animation8,
  Animation9,
  Animation10,
  Animation11,
  Animation12,
} from "../screens/index";

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
      <Stack.Screen name="Animation10" component={Animation10} />
      <Stack.Screen name="Animation11" component={Animation11} />
      <Stack.Screen name="Animation12" component={Animation12} />
    </Stack.Navigator>
  );
}

export default Initial;
