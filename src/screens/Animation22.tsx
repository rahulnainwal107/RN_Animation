import React, { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";

import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import getRandomColor from "../utils/getRandomColor";

const Animation22 = () => {
  const animatedValue = useSharedValue(0);
  const animatedColor = useSharedValue(getRandomColor());

  useEffect(() => {
    animatedValue.value = withRepeat(
      withTiming(1, { duration: 1000 }),
      -1,
      true
    );
    animatedColor.value = withRepeat(
      withTiming(getRandomColor(), { duration: 2000 }),
      -1,
      true
    );
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: interpolate(animatedValue.value, [0, 1], [0, 50]) },
      ],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: interpolate(animatedValue.value, [0, 1], [0, -50]) },
      ],
    };
  });

  const mainContainer = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animatedValue.value,
        [0, 1],
        [animatedColor.value, animatedColor.value]
      ),
    };
  }, []);

  return (
    <Animated.View style={[styles.mainCintainer, mainContainer]}>
      <Animated.View
        style={[styles.circleView1, animatedStyle1]}
      ></Animated.View>
      <Animated.View
        style={[styles.circleView2, animatedStyle2]}
      ></Animated.View>
    </Animated.View>
  );
};

export default Animation22;

const styles = StyleSheet.create({
  mainCintainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  circleView1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "white",
  },
  circleView2: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "black",
  },
});
