import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

import Animated, {
  useAnimatedStyle,
  SlideOutLeft,
  FadeIn,
  Layout,
  withDelay,
  EntryExitAnimationFunction,
  EntryAnimationsValues,
  withTiming,
  withSequence,
  useSharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

type Animated20ComponentProps = {
  item: number;
  index: number;
};

const Animated20Component: React.FC<Animated20ComponentProps> = ({
  item,
  index,
}) => {
  const entering: EntryExitAnimationFunction = () => {
    "worklet";
    const animations = {
      opacity: withDelay(index * 200, withTiming(1, { duration: 100 })),
      //originX: withDelay(index * 200, withTiming(10, { duration: 500 })),
      transform: [
        //{ rotate: withTiming("0deg", { duration: 4000 }) },
        {
          scale: withDelay(index * 200, withTiming(1, { duration: 500 })),
        },
        // {
        //   translateX: withDelay(index * 200, withTiming(0, { duration: 500 })),
        // },
      ],
    };
    const initialValues = {
      opacity: 0,
      transform: [{ scale: 0 }],
      //transform: [{ translateX: width }],
      //originX: width,
    };
    return {
      initialValues,
      animations,
    };
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {};
  }, []);

  return (
    <Animated.View
      style={[styles.renderItem, animatedStyle]}
      entering={entering}
      //exiting={SlideOutLeft}
      layout={Layout.springify()}
    >
      <Text style={styles.text}>{item + 1}</Text>
    </Animated.View>
  );
};

export default Animated20Component;

const styles = StyleSheet.create({
  renderItem: {
    backgroundColor: "green",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});
