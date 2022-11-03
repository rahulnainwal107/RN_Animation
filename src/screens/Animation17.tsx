import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Animated, {
  withTiming,
  withDelay,
  EntryExitAnimationFunction,
  Layout,
  EntryAnimationsValues,
  ExitAnimationsValues,
  withSequence,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const Animation17 = () => {
  const [show, setShow] = useState(false);

  const entering: EntryExitAnimationFunction = (
    targetValues: EntryAnimationsValues
  ) => {
    "worklet";
    const animations = {
      originX: withTiming(targetValues.targetOriginX, { duration: 3000 }),
      opacity: withTiming(1, { duration: 2000 }),
      borderRadius: withDelay(4000, withTiming(30, { duration: 3000 })),
      transform: [
        { rotate: withTiming("0deg", { duration: 4000 }) },
        {
          scale: withSequence(
            withTiming(0, { duration: 3500 }),
            withTiming(2, { duration: 1000 }),
            withTiming(1, { duration: 500 })
          ),
        },
      ],
    };
    const initialValues = {
      originX: -width,
      opacity: 0,
      borderRadius: 10,
      transform: [{ rotate: "90deg" }, { scale: 2 }],
    };
    return {
      initialValues,
      animations,
    };
  };

  const exiting: EntryExitAnimationFunction = (
    startingValues: ExitAnimationsValues
  ) => {
    "worklet";
    const animations = {
      originX: withTiming(width, { duration: 500 }),
      opacity: withTiming(0.5, { duration: 2000 }),
    };
    const initialValues = {
      originX: startingValues.currentOriginX,
      opacity: 1,
    };

    return {
      animations,
      initialValues,
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.swipContainer}>
        {show && (
          <Animated.View
            style={styles.cardContainer}
            entering={entering}
            exiting={exiting}
            layout={Layout}
          >
            <Text>Hello</Text>
          </Animated.View>
        )}
      </View>
      <Text style={styles.button} onPress={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </Text>
    </View>
  );
};

export default Animation17;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipContainer: {
    height: height / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 30,
    alignSelf: "center",
  },
  cardContainer: {
    height: height / 2 - 20,
    backgroundColor: "red",
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
