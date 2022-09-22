import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

import Button from "../components/Button";

const { width } = Dimensions.get("window");

const IMAGE_HEIGHT = 200,
  IMAGE_WIDTH = width - 20;

const Animation4 = () => {
  const animationValue = useSharedValue(0);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const onPress = () => {
    animationValue.value = withSpring(1);
    setIsButtonPressed(true);
  };

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
      transform: [{ scale: interpolate(animationValue.value, [0, 1], [0, 1]) }],
    };
  }, []);

  return (
    <View>
      {!isButtonPressed && (
        <Button buttonName={"Done"} subText="" onPress={onPress} />
      )}
      <Animated.View style={[styles.imageContainer, animationStyle]}>
        <Image
          source={require("../../assets/surprise.jpeg")}
          style={{ height: "100%", width: "100%" }}
        />
      </Animated.View>
    </View>
  );
};

export default Animation4;

const styles = StyleSheet.create({
  imageContainer: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    backgroundColor: "#000",
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
