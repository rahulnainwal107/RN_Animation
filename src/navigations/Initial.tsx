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
  Animation13,
  Animation14,
  Animation15,
  Animation16,
  Animation17,
  Animation18,
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
      <Stack.Screen name="Animation13" component={Animation13} />
      <Stack.Screen
        name="Animation14"
        component={Animation14}
        options={{ headerTransparent: true }}
      />
      <Stack.Screen
        name="Animation15"
        component={Animation15}
        options={{ headerTransparent: true }}
      />
      <Stack.Screen name="Animation16" component={Animation16} />
      <Stack.Screen name="Animation17" component={Animation17} />
      <Stack.Screen name="Animation18" component={Animation18} />
    </Stack.Navigator>
  );
}

export default Initial;
