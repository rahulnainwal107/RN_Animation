import React from "react";
import { Dimensions } from "react-native";

import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

const Animation8 = () => {
  const animatedValue = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const handlePinchGesture =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: (event) => {
        focalX.value = event.focalX;
        focalY.value = event.focalY;
        animatedValue.value = event.scale;
      },
      onEnd: () => {
        animatedValue.value = withTiming(1);
      },
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: animatedValue.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ],
    };
  }, []);

  return (
    <PinchGestureHandler onGestureEvent={handlePinchGesture}>
      <Animated.View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Animated.Image
          source={require("../../assets/Pinch.png")}
          style={[{ flex: 1, resizeMode: "contain" }, animatedStyle]}
        />
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default Animation8;
