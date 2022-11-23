import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Animation19Component from "../components/Animation19Component";

const dots = [1, 2, 3, 4];
const intervalTime = 1000;

const Animation19 = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((active) => (active > dots.length - 1 ? 1 : active + 1));
    }, intervalTime);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.main}>
      {dots.map((item) => (
        <Animation19Component key={item} index={item} active={active} />
      ))}
    </View>
  );
};

export default Animation19;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
