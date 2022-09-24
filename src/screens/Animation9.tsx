import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Animation9 = () => {
  const animationValue = useSharedValue(0);

  const onPressLike = () => {
    animationValue.value = withTiming(1, {
      duration: 1000,
      easing: Easing.linear,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(animationValue.value, [0, 0.5, 1], [0, -45, 0]);
    const tintColor = interpolateColor(
      animationValue.value,
      [0, 1],
      ["black", "red"]
    );
    return {
      tintColor,
      transform: [
        { scale: interpolate(animationValue.value, [0, 0.5, 1], [1, 3, 1]) },
        { rotate: `${rotate}deg` },
      ],
    };
  }, []);

  return (
    <View style={styles.conainer}>
      <TouchableOpacity onPress={onPressLike}>
        <Animated.Image
          source={require("../../assets/like.png")}
          style={[styles.image, animatedStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Animation9;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
});
