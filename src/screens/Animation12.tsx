import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";

import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const BUTTON_HEIGHT: number = 60;
const BUTTON_WIDTH: number = Dimensions.get("window").width - 30;

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedActivityIndicator =
  Animated.createAnimatedComponent(ActivityIndicator);

const Animation12 = () => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const animatedValue = useSharedValue<number>(0);

  const setAnimatedValue = () => {
    setIsButtonClicked(true);
    animatedValue.value = withTiming(1, {
      duration: 500,
    });
  };

  const buttonStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        animatedValue.value,
        [0, 0.5, 1],
        [BUTTON_WIDTH, BUTTON_WIDTH / 2, BUTTON_HEIGHT]
      ),
      borderRadius: interpolate(
        animatedValue.value,
        [0, 1],
        [10, BUTTON_HEIGHT / 2]
      ),
    };
  }, []);

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedValue.value, [0, 1], [1, 0]),
    };
  }, []);

  const activityIndicatorStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedValue.value, [0, 1], [0, 1]),
    };
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedTouchable
        style={[styles.buttonContainer, buttonStyle]}
        onPress={setAnimatedValue}
        disabled={isButtonClicked || false}
      >
        <Animated.Text style={[styles.buttonText, textStyle]}>
          Sign In
        </Animated.Text>
        <AnimatedActivityIndicator
          style={[styles.activityIndicator, activityIndicatorStyle]}
          size="large"
          color={"white"}
        />
      </AnimatedTouchable>
    </View>
  );
};

export default Animation12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    height: BUTTON_HEIGHT,
    alignSelf: "center",
    width: BUTTON_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  activityIndicator: {
    position: "absolute",
  },
});
