import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

interface PageProps {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const Animation3Page: React.FC<PageProps> = ({ title, index, translateX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, (width * 0.4) / 2, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  }, []);

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [200, 0, -200],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, 2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  }, []);

  return (
    <View
      style={[
        styles.pageContainer,
        { backgroundColor: `rgba(0,0,255,${0.2 * index})` },
      ]}
    >
      <Animated.View
        style={[
          styles.centerItem,
          { backgroundColor: `rgba(0,0,255,${0.25 * (index + 1)})` },
          animatedStyle,
        ]}
      ></Animated.View>
      <Animated.View style={[{ position: "absolute" }, rTextStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default Animation3Page;

const styles = StyleSheet.create({
  pageContainer: {
    height,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  centerItem: {
    height: width * 0.4,
    width: width * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
