import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Animation25 = () => {
  const animatedValue = useSharedValue(0);
  const zindex = useSharedValue(0);

  const animatedValue1 = useSharedValue(0);
  const zindex1 = useSharedValue(0);

  const animatedStyle1 = useAnimatedStyle(() => {
    const rotate = interpolate(animatedValue.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotateY: `${rotate}deg` }],
      zIndex: interpolate(zindex.value, [0, 1], [1, 0]),
      opacity: interpolate(animatedValue.value, [0, 1], [1, 0]),
      backgroundColor: interpolateColor(
        animatedValue.value,
        [0, 1],
        ["green", "red"]
      ),
    };
  }, []);

  const animatedStyle2 = useAnimatedStyle(() => {
    const rotate = interpolate(animatedValue.value, [0, 1], [180, 0]);
    return {
      transform: [{ rotateY: `${rotate}deg` }],
      zIndex: interpolate(zindex.value, [0, 1], [0, 1]),
      opacity: interpolate(animatedValue.value, [0, 1], [0, 1]),
      backgroundColor: interpolateColor(
        animatedValue.value,
        [0, 1],
        ["green", "red"]
      ),
    };
  }, []);

  const onPress = () => {
    animatedValue.value = withTiming(animatedValue.value ? 0 : 1, {
      duration: 2000,
    });
    zindex.value = zindex.value ? withTiming(0) : withTiming(1);
  };

  const onPress1 = () => {
    animatedValue1.value = withTiming(animatedValue1.value ? 0 : 1, {
      duration: 2000,
    });
    zindex1.value = zindex1.value ? withTiming(0) : withTiming(1);
  };

  const animatedStyle21 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: interpolate(animatedValue1.value, [0, 1], [1, 0]) }],
      zIndex: interpolate(zindex1.value, [0, 1], [1, 0]),
      opacity: interpolate(animatedValue1.value, [0, 1], [1, 0]),
      backgroundColor: interpolateColor(
        animatedValue1.value,
        [0, 1],
        ["green", "red"]
      ),
    };
  }, []);

  const animatedStyle22 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: interpolate(animatedValue1.value, [0, 1], [0, 1]) }],
      zIndex: interpolate(zindex1.value, [0, 1], [0, 1]),
      opacity: interpolate(animatedValue1.value, [0, 1], [0, 1]),
      backgroundColor: interpolateColor(
        animatedValue1.value,
        [0, 1],
        ["green", "red"]
      ),
    };
  }, []);

  return (
    <View style={styles.main}>
      <Animated.View style={[styles.second, animatedStyle1]}>
        <Text>1</Text>
      </Animated.View>
      <Animated.View style={[styles.second, animatedStyle2]}>
        <Text>2</Text>
      </Animated.View>
      <Button title="Press Me" onPress={onPress} />
      <View style={{ marginTop: 250 }}>
        <Animated.View style={[styles.third, animatedStyle21]}>
          <Text>1</Text>
        </Animated.View>
        <Animated.View style={[styles.third, animatedStyle22]}>
          <Text>2</Text>
        </Animated.View>
        <Button title="Press Me" onPress={onPress1} />
      </View>
    </View>
  );
};

export default Animation25;

const styles = StyleSheet.create({
  main: {},
  second: {
    marginTop: 40,
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  third: {
    marginTop: 40,
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
