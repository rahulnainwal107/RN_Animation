import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const BUTTON_HEIGHT = 55,
  BUTTON_WIDTH = width - 20;

const Animation13 = () => {
  const translateX = useSharedValue(0);
  console.log("width ", width);
  const panGestureHandlerEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {},
    onActive: (event, context) => {
      console.log(event);
      translateX.value = withSpring(event.translationX);
    },
    onEnd: (event) => {
      if (event.translationX > width / 2) {
        translateX.value = withTiming(width);
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const swipeContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.backViewText}>Swipe to pay</Text>
      </View>
      <PanGestureHandler onGestureEvent={panGestureHandlerEvent}>
        <Animated.View
          style={[styles.swappableButtonStyle, swipeContainerStyle]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/rightArrow.png")}
              style={{ height: "90%", width: "90%" }}
            />
          </View>
          <Text style={styles.swappableButtonText}>Swipe to pay</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Animation13;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    alignSelf: "center",
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  backViewText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  swappableButtonStyle: {
    flexDirection: "row",
    alignSelf: "center",
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: "yellow",
    borderRadius: 5,
    alignItems: "center",
    position: "absolute",
  },
  swappableButtonText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
  imageContainer: {
    height: BUTTON_HEIGHT,
    width: BUTTON_HEIGHT,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
