import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text } from "react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const IMAGE_HEIGHT = 150,
  IMAGE_WIDTH = IMAGE_HEIGHT,
  IMAGE_BORDER_RADIOUS = IMAGE_HEIGHT / 2;
const { width } = Dimensions.get("window");
const ANIMATION_DURATION = 10000;
const IMAGES = [
  {
    img: require("../assets/images/1.jpeg"),
    name: "Tacos and Tostada - Mexico",
  },
  { img: require("../assets/images/2.jpg"), name: "Meat Pie - Australia" },
  { img: require("../assets/images/3.jpeg"), name: "Jiaozi, China" },
  { img: require("../assets/images/4.jpeg"), name: "Jerk Chicken - Jamaica" },
];

const Animated21Component = () => {
  return (
    <>
      {IMAGES.map((item, index) => {
        const timeIntervalForImageChange = ANIMATION_DURATION / IMAGES.length;
        const delayDuration = timeIntervalForImageChange * index;

        const animatedValue1 = useSharedValue(0);
        const animatedStyleImage = useAnimatedStyle(() => {
          return {
            opacity: interpolate(animatedValue1.value, [0, 1], [0, 1]),
            transform: [
              {
                scale: interpolate(animatedValue1.value, [0, 1], [1.5, 1]),
              },
              {
                translateX: interpolate(
                  animatedValue1.value,
                  [0, 1],
                  [width / 2 + IMAGE_WIDTH, 1]
                ),
              },
            ],
          };
        }, []);

        useEffect(() => {
          const id = setTimeout(() => {
            animatedValue1.value = withSpring(1);
          }, delayDuration);

          return () => clearTimeout(id);
        }, []);

        return (
          <Animated.View
            key={index}
            style={[styles.container, animatedStyleImage]}
          >
            <Image source={item.img} style={[styles.imageStyle]} />
          </Animated.View>
        );
      })}
    </>
  );
};

export default Animated21Component;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    borderRadius: IMAGE_BORDER_RADIOUS,
  },
});
