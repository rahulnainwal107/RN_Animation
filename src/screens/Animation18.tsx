import React from "react";
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

import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

const Animation18 = () => {
  const entering: EntryExitAnimationFunction = (
    targetValues: EntryAnimationsValues
  ) => {
    "worklet";
    const animations = {};
    const initialValues = {
      originX: width - 20,
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
      originX: -width - 20,
    };

    return {
      animations,
      initialValues,
    };
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Animated.View
          style={styles.item}
          entering={entering}
          exiting={exiting}
        >
          <Text>Animation18</Text>
        </Animated.View>
        <Animated.View style={styles.item}>
          <Text>Animation18</Text>
        </Animated.View>
      </View>
      <Button buttonName="Next" onPress={() => {}} />
    </View>
  );
};

export default Animation18;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    width: width - 20,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
  },
});
