import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Animated, {
  useDerivedValue,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolate,
  interpolateColor,
  withTiming,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

import Animated7Button from "../components/Animated7Button";

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

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
  // Option 1
  // const [isButtonPressed, setButtonPressed] = useState<buttonPress>(false);
  // const animationValue = useDerivedValue(
  //   () => (isButtonPressed ? 1 : 0),
  //   [isButtonPressed]
  // );

  // const onButtonPress = () => {
  //   setButtonPressed(!isButtonPressed);
  // };

  // Option 2
  const animationValue = useSharedValue(0);

  const onButtonPress = () => {
    animationValue.value = animationValue.value ? withTiming(0) : withTiming(1);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(animationValue.value, [0, 1], [0, 45]);
    return {
      color: interpolateColor(animationValue.value, [0, 1], ["black", "red"]),
      transform: [{ rotate: `${rotate}deg` }],
    };
  }, []);

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
        <TouchableOpacity style={styles.mainButton} onPress={onButtonPress}>
          <AnimatedIcon
            name={"add"}
            size={30}
            color="white"
            style={animatedStyle}
          />
        </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
