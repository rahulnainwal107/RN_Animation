import { View } from "react-native";
import React, { useEffect } from "react";

import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const Animation15 = () => {
  const sharedValue = useSharedValue(0);

  useEffect(() => {
    sharedValue.value = withRepeat(withTiming(1, { duration: 2000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(sharedValue.value, [0, 1], [1, 0]),
      transform: [
        { scaleX: interpolate(sharedValue.value, [0, 1], [2, 4]) },
        { scaleY: interpolate(sharedValue.value, [0, 1], [2, 4]) },
      ],
    };
  });

  const phoneImageAnimationStyle = useAnimatedStyle(() => {
    return {
      tintColor: interpolateColor(
        sharedValue.value,
        [0, 1],
        ["white", "green"]
      ),
      transform: [
        { scaleX: interpolate(sharedValue.value, [0, 1], [1, 0.5]) },
        { scaleY: interpolate(sharedValue.value, [0, 1], [1, 0.5]) },
      ],
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          {
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          },
          animatedStyle,
        ]}
      ></Animated.View>
      <Animated.Image
        source={require("../../assets/phone.png")}
        style={[{ height: 45, width: 45 }, phoneImageAnimationStyle]}
      />
    </View>
  );
};

export default Animation15;
