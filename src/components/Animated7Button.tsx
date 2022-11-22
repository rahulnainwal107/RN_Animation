import React from "react";
import { StyleSheet } from "react-native";

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const MAIN_BUTTON_HEIGHT = 80,
  SUB_BUTTON_HEIGHT = MAIN_BUTTON_HEIGHT - 20,
  SUB_BUTTON_WIDTH = SUB_BUTTON_HEIGHT;

interface buttonProps {
  color: string;
  index: number;
  animatedValue: Animated.SharedValue<number>;
}

const Animated7Button: React.FC<buttonProps> = ({
  color,
  index,
  animatedValue,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animatedValue.value
            ? withSpring(-(index + 1) * MAIN_BUTTON_HEIGHT, {
                mass: 0.5,
                stiffness: 50,
              })
            : withTiming(0),
        },
      ],
    };
  }, []);

  return (
    <Animated.View
      key={index}
      style={[
        styles.subButton,
        {
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    ></Animated.View>
  );
};

export default Animated7Button;

const styles = StyleSheet.create({
  subButton: {
    height: SUB_BUTTON_HEIGHT,
    width: SUB_BUTTON_WIDTH,
    borderRadius: SUB_BUTTON_HEIGHT / 2,
    backgroundColor: "green",
    elevation: 5,
    shadowOpacity: 0.3,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: "grey",
    shadowRadius: 1,
    position: "absolute",
    marginVertical: 10,
  },
});
