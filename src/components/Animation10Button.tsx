import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Animated, {
  BounceIn,
  FadeIn,
  FadeInRight,
  FadeOut,
  JumpingTransition,
  Layout,
  RotateInDownLeft,
  SlideInDown,
  SlideInUp,
  SlideOutLeft,
  Transition,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

const AnimatedTouchableButton =
  Animated.createAnimatedComponent(TouchableOpacity);

interface buttonProps {
  onPress(): void;
}

const Animation10Button: React.FC<buttonProps> = ({ onPress }) => {
  return (
    <AnimatedTouchableButton
      style={styles.container}
      entering={RotateInDownLeft}
      exiting={SlideOutLeft.duration(1000)}
      layout={Layout}
      onPress={onPress}
    ></AnimatedTouchableButton>
  );
};

export default Animation10Button;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "90%",
    backgroundColor: "blue",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
});
