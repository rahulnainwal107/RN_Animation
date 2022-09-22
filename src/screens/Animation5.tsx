import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");
const SWITCH_BUTTON_HEIGHT = 0.2 * width,
  SWITCH_BUTTON_WIDTH = 2 * SWITCH_BUTTON_HEIGHT,
  SWITCH_TRACK_HEIGHT = 0.8 * SWITCH_BUTTON_HEIGHT,
  SWITCH_BUTTON_MARGIN = 0.1 * SWITCH_BUTTON_HEIGHT;
const TouchableAnimatedComponent =
  Animated.createAnimatedComponent(TouchableOpacity);

const Animation5 = () => {
  const animationSharedValue = useSharedValue(0);
  const [isSwitchEnabled, setSwichEnabled] = useState(false);

  const onPressButton = () => {
    setSwichEnabled(!isSwitchEnabled);
    animationSharedValue.value = isSwitchEnabled ? 0 : 1;
  };

  const touchableAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationSharedValue.value,
      [0, 1],
      ["rgba(190,185,185,.9)", "rgba(128,123,125,0.8)"]
    );
    return { backgroundColor };
  }, []);

  const switchButtonAnimatedStyle = useAnimatedStyle(() => {
    const distenceFromLeft =
      SWITCH_BUTTON_WIDTH - (2 * SWITCH_BUTTON_MARGIN + SWITCH_TRACK_HEIGHT);
    const left = withSpring(animationSharedValue.value ? distenceFromLeft : 0);
    // const left = withTiming(animationSharedValue.value ? distenceFromLeft : 0, {
    //     duration: 500,
    //   });
    const backgroundColor = interpolateColor(
      animationSharedValue.value,
      [0, 1],
      ["rgba(128,123,125,0.8)", "rgba(7,249,138,0.8)"]
    );
    return {
      left,
      backgroundColor,
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableAnimatedComponent
        style={[styles.switchButtonContainer, touchableAnimatedStyle]}
        onPress={onPressButton}
      >
        <Animated.View
          style={[styles.switchTrack, switchButtonAnimatedStyle]}
        ></Animated.View>
      </TouchableAnimatedComponent>
    </View>
  );
};

export default Animation5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  switchButtonContainer: {
    height: SWITCH_BUTTON_HEIGHT,
    width: 2 * SWITCH_BUTTON_HEIGHT,
    borderRadius: SWITCH_BUTTON_HEIGHT,
    justifyContent: "center",
  },
  switchTrack: {
    margin: 0.1 * SWITCH_BUTTON_HEIGHT,
    height: SWITCH_TRACK_HEIGHT,
    width: SWITCH_TRACK_HEIGHT,
    borderRadius: SWITCH_TRACK_HEIGHT / 2,
    position: "absolute",
    right: 0,
    elevation: 5,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    shadowColor: "grey",
    shadowRadius: 1,
  },
});
