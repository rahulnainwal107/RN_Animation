import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { useDerivedValue, withSpring } from "react-native-reanimated";

import Animated7Button from "../components/Animated7Button";

const MAIN_BUTTON_HEIGHT = 80,
  MAIN_BUTTON_WIDTH = MAIN_BUTTON_HEIGHT;

const BUTTONS = [
  { color: "green" },
  { color: "yellow" },
  { color: "red" },
  { color: "grey" },
];

type buttonPress = true | false;

const Animation7 = () => {
  const [isButtonPressed, setButtonPressed] = useState<buttonPress>(false);
  const animationValue = useDerivedValue(
    () => (isButtonPressed ? withSpring(1) : withSpring(0)),
    [isButtonPressed]
  );

  const onButtonPress = () => {
    setButtonPressed(!isButtonPressed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {BUTTONS.map((item, index) => {
          const { color } = item;
          return (
            <Animated7Button
              key={index}
              color={color}
              index={index}
              animatedValue={animationValue}
            />
          );
        })}
        <TouchableOpacity style={styles.mainButton} onPress={onButtonPress} />
      </View>
    </View>
  );
};

export default Animation7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
  },
  buttonContainer: { alignItems: "center" },
  mainButton: {
    height: MAIN_BUTTON_HEIGHT,
    width: MAIN_BUTTON_WIDTH,
    borderRadius: MAIN_BUTTON_HEIGHT / 2,
    backgroundColor: "pink",
    elevation: 5,
    shadowOpacity: 0.3,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: "grey",
    shadowRadius: 1,
  },
});
