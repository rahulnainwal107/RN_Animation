import React from "react";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import Animation3Page from "../components/Animation3Page";

const screens = ["Screen 1", "Screen 2", "Screen 3", "Screen 4"];

const Animation3 = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(
    (event) => (translateX.value = event.contentOffset.x)
  );

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {screens.map((screen, index) => {
        return (
          <Animation3Page
            key={index}
            title={screen}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default Animation3;
