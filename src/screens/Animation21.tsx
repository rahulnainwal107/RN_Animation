import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Animated21Component from "../components/Animated21Component";

const ANIMATION_DURATION = 10000;

const Animation21 = () => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    // animatedValue.value = withRepeat(
    //   withSequence(
    //     withTiming(1, { duration: 1000 }),
    //     withTiming(0, { duration: 1000 })
    //   ),
    //   -1,
    //   true
    // );

    // animatedValue.value = withRepeat(
    //   withTiming(1, { duration: 10000 }),
    //   -1,
    //   true
    // );

    animatedValue.value = withTiming(1, { duration: ANIMATION_DURATION });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          //translateX: interpolate(animatedValue.value, [0, 1], [-width, width]),
          scale: interpolate(animatedValue.value, [0, 1], [10, 1]),
        },
      ],
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Animated.Image
        source={require("../assets/images/cloud.jpeg")}
        style={[{ height: "100%", width: "100%" }, animatedStyle]}
        resizeMode="repeat"
      />
      <Animated21Component />
    </View>
  );
};

export default Animation21;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
