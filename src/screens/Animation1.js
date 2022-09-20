import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const SIZE = 100;

const Animation1 = () => {
  const opacityValue = useSharedValue(1);
  const scaleValue = useSharedValue(2);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
      transform: [
        {
          scale: scaleValue.value,
        },
        { rotate: `${2 * opacityValue.value * Math.PI}rad` },
      ],
      borderRadius: (SIZE * opacityValue.value) / 2,
    };
  }, []);

  useEffect(() => {
    opacityValue.value = withRepeat(withSpring(0.5), -1, true);
    scaleValue.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={[styles.animatedView, animationStyle]}
      ></Animated.View>
    </View>
  );
};

export default Animation1;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedView: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "blue",
  },
});
