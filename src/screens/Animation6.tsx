import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Switch } from "react-native";

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const CIRCLE_HEIGHT = width * 0.7,
  CIRCLE_WIDTH = CIRCLE_HEIGHT;

const Colors = {
  dark: {
    background: "#1E1E1E",
    circle: "#252525",
    text: "#F8F8F8",
  },
  light: {
    background: "#F8F8F8",
    circle: "#fff",
    text: "#1E1E1E",
  },
};

const SWITCH_TRACK_COLOR = {
  true: "rgba(256,0,256,0.2)",
  false: "rgba(0,0,0,0.1)",
};

type theme = "light" | "dark";

const Animation6 = () => {
  const [theme, setTheme] = useState<theme>("light");

  //const progressValue = useSharedValue(0);
  const progressValue = useDerivedValue(() => {
    return theme === "dark" ? withTiming(0) : withTiming(1);
  }, [theme]);

  const onToggleSwitch = (toggled) => {
    setTheme(toggled ? "dark" : "light");
  };

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progressValue.value,
      [0, 1],
      [Colors.dark.background, Colors.light.background]
    );
    return {
      backgroundColor,
    };
  }, []);

  const textStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progressValue.value,
      [0, 1],
      [Colors.dark.text, Colors.light.text]
    );
    return {
      color,
    };
  }, []);

  const circleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progressValue.value,
      [0, 1],
      [Colors.dark.circle, Colors.light.circle]
    );
    return {
      backgroundColor,
    };
  }, []);

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.Text style={[styles.themeText, textStyle]}>THEME</Animated.Text>
      <Animated.View style={[styles.buttonContainer, circleStyle]}>
        <Switch
          value={theme === "dark"}
          onValueChange={onToggleSwitch}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={"violet"}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default Animation6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  themeText: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
    letterSpacing: width * 0.08,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: CIRCLE_HEIGHT,
    width: CIRCLE_WIDTH,
    borderRadius: CIRCLE_HEIGHT / 2,
    elevation: 5,
  },
});
