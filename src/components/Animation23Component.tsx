import React from "react";
import { StyleSheet } from "react-native";

import Animated, {
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

type Animation23ComponentProp = {
  index: number;
  key: number;
};

const Animation23Component: React.FC<Animation23ComponentProp> = ({
  index,
}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withDelay(
      // random offset to make it prettier
      1000 * index,
      withRepeat(
        withSequence(
          withTiming(0.4, { duration: 1000 }),
          withTiming(1, { duration: 1000 })
        ),
        // "-1" => the loop is infinite
        -1,
        // "true" => when the animation has ended, it is triggered backwards
        true
      )
    ),
  }));

  return <Animated.View style={[animatedStyle, styles.block]}></Animated.View>;
};

export default Animation23Component;

const styles = StyleSheet.create({
  block: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    margin: 5,
  },
});
