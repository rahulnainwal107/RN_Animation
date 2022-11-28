import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

import Animated, {
  useAnimatedStyle,
  useAnimatedScrollHandler,
  useSharedValue,
  interpolate,
  withSpring,
  withTiming,
  Easing,
  Extrapolate,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = 200,
  MIN_HEADER_HIGHT = 55;

const Animation14 = () => {
  const translateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const { y } = event.contentOffset;
    y < IMAGE_HEIGHT - MIN_HEADER_HIGHT &&
      (translateY.value = withTiming(y, { easing: Easing.linear }));
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        translateY.value,
        [0, IMAGE_HEIGHT - MIN_HEADER_HIGHT],
        [IMAGE_HEIGHT, MIN_HEADER_HIGHT],
        Extrapolate.CLAMP
      ),
    };
  });

  //   const imageStyle = useAnimatedStyle(() => {
  //     return {
  //       height: interpolate(
  //         translateY.value,
  //         [0, IMAGE_HEIGHT - MIN_HEADER_HIGHT],
  //         [IMAGE_HEIGHT, MIN_HEADER_HIGHT]
  //       ),
  //     };
  //   });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/cat.jpeg")}
        style={[styles.image]}
      />
      <Animated.ScrollView
        onScroll={scrollHandler}
        style={[styles.scrollViewStyle, animatedStyle]}
        scrollEventThrottle={16}
      >
        <Text>Scroll Me</Text>
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
        <Image
          source={require("../../assets/cat.jpeg")}
          style={[styles.image, { position: "relative" }]}
        />
      </Animated.ScrollView>
    </View>
  );
};

export default Animation14;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollViewStyle: {},
  image: { height: IMAGE_HEIGHT, width, position: "absolute" },
});
