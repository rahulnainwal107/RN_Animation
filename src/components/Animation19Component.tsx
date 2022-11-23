import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const SIZE = width * 0.04;

type Animation19ComponentProps = {
  index: number;
  active: number;
};

const Animation19Component: React.FC<Animation19ComponentProps> = ({
  index,
  active,
}) => {
  const animatedValue = useDerivedValue(() => {
    return active === index ? withTiming(1) : withTiming(0);
  }, [active, index]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animatedValue.value,
        [0, 1],
        ["grey", "black"]
      ),
      transform: [
        { scale: interpolate(animatedValue.value, [0, 1], [1, 2]) },
        { translateY: interpolate(animatedValue.value, [0, 1], [0, -5]) },
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[styles.circleContainer, animatedStyle]}
    ></Animated.View>
  );
};

export default Animation19Component;

const styles = StyleSheet.create({
  circleContainer: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    marginHorizontal: 10,
  },
});
