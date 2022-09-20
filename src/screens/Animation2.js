import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const SIZE = Dimensions.get("window").width - 10;
const CENTRAL_ITEM = 100;
const CIRCLE_RADIUS = SIZE / 2 + CENTRAL_ITEM / 2;

const Animation2 = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const borderWidth = useSharedValue(2);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  }, []);

  const circleAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderWidth: borderWidth.value,
    };
  }, []);

  const panGestureHandlerEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      // context is used to save some value
      context.translateX = translateX.value;
      context.translateY = translateY.value;
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS) {
        borderWidth.value = withSpring(2);
      } else {
        borderWidth.value = withSpring(0);
      }
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS) {
        borderWidth.value = withSpring(2);
      } else {
        borderWidth.value = withSpring(0);
      }
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      } else {
        borderWidth.value = withSpring(0);
      }
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[styles.circleContainer, circleAnimatedStyle]}>
        <PanGestureHandler onGestureEvent={panGestureHandlerEvent}>
          <Animated.View
            style={[styles.centralItem, animatedStyle]}
          ></Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </View>
  );
};

export default Animation2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    borderColor: "blue",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  centralItem: {
    height: CENTRAL_ITEM,
    width: CENTRAL_ITEM,
    borderRadius: CENTRAL_ITEM / 4,
    backgroundColor: "blue",
  },
});
