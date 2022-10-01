import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Animated, {
  FadeOut,
  FadeOutUp,
  Layout,
  SlideInDown,
  SlideInRight,
  SlideOutRight,
  SlideOutUp,
  ZoomOut,
  ZoomOutEasyDown,
  ZoomOutRight,
  useDerivedValue,
  withSpring,
  useAnimatedStyle,
  interpolateColor,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

interface Animation11Props {
  title: string;
  points: points[];
}

interface points {
  point: string;
  id: number;
}

type visiblity = true | false;

const { width } = Dimensions.get("window");
const BUTTON_HEIGHT = 40,
  SUBITEM_HEIGHT = BUTTON_HEIGHT,
  BUTTON_CONTAINER_MARGIN = 10,
  MARGIN_BETWEEN_ITEM_SUBITEM = BUTTON_CONTAINER_MARGIN;

const Animation11Component: React.FC<Animation11Props> = ({
  title,
  points,
}) => {
  const [isSubItemsVisible, setSubItemsVisible] = useState<visiblity>(false);

  const drivedAnimatedValue = useDerivedValue(() => {
    return isSubItemsVisible ? withSpring(1) : withTiming(0);
  }, [isSubItemsVisible]);

  const changeVisiblity = () => {
    setSubItemsVisible(!isSubItemsVisible);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(drivedAnimatedValue.value, [0, 1], [0, 180]);
    return {
      color: interpolateColor(
        drivedAnimatedValue.value,
        [0, 1],
        ["white", "red"]
      ),
      transform: [{ rotate: `${rotate}deg` }],
    };
  }, []);

  const mainContainerAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      drivedAnimatedValue.value,
      [0, 1],
      [
        BUTTON_HEIGHT,
        BUTTON_HEIGHT +
          points.length * SUBITEM_HEIGHT +
          MARGIN_BETWEEN_ITEM_SUBITEM,
      ]
    );
    return {
      height,
    };
  }, []);

  return (
    <Animated.View style={[styles.mainContainer, mainContainerAnimatedStyle]}>
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={changeVisiblity}
      >
        <Text style={styles.text}>Animation11Component</Text>
        <AnimatedIcon
          name={"chevron-down-circle-outline"}
          size={25}
          color="white"
          style={animatedStyle}
        />
      </TouchableOpacity>
      {isSubItemsVisible && (
        <Animated.View
          style={styles.subItemContainer}
          entering={SlideInRight}
          exiting={SlideOutRight.duration(100)}
          layout={Layout}
        >
          {points.map((item, index) => {
            return (
              <Animated.View
                key={index}
                entering={SlideInDown.delay(index * 200)}
                // exiting={SlideOutUp.delay(index * 100)}
                // layout={Layout}
              >
                <View style={styles.subItems} key={index}>
                  <Text style={styles.text}>{title}</Text>
                  <View style={styles.pointContainer}>
                    <Text style={styles.pointText}>{item.point}</Text>
                  </View>
                </View>
                {index + 1 !== points.length && <View style={styles.line} />}
              </Animated.View>
            );
          })}
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default Animation11Component;

const styles = StyleSheet.create({
  mainContainer: {
    margin: BUTTON_CONTAINER_MARGIN,
  },
  headerContainer: {
    height: BUTTON_HEIGHT,
    backgroundColor: "grey",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  subItemContainer: {
    borderRadius: 5,
    backgroundColor: "grey",
    marginTop: MARGIN_BETWEEN_ITEM_SUBITEM,
  },
  subItems: {
    height: SUBITEM_HEIGHT,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  line: {
    width: width - 40,
    alignSelf: "center",
    height: 1,
    backgroundColor: "lightgrey",
  },
  pointContainer: {
    width: "auto",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },
  pointText: {
    color: "white",
    fontSize: 14,
    letterSpacing: 1,
  },
});
