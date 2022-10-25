import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  withRepeat,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const Animation16 = () => {
  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            animatedValue.value,
            [0, 1],
            [0, width - (20 + 5 + (width - 20) / 4)]
          ),
        },
      ],
    };
  }, []);

  useEffect(() => {
    animatedValue.value = withRepeat(
      withTiming(1, { duration: 500 }),
      -1,
      true
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 30,
          width: width - 20,
          borderRadius: 15,
          backgroundColor: "grey",
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={[
            {
              height: 25,
              width: (width - 20) / 4,
              borderRadius: 15,
              marginHorizontal: 5,
              backgroundColor: "red",
            },
            animatedStyle,
          ]}
        ></Animated.View>
      </View>
    </View>
  );
};

export default Animation16;
