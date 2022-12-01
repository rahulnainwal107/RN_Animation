import React from "react";
import { View, StyleSheet } from "react-native";

import Animation23Component from "../components/Animation23Component";

const Animation23 = () => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Animation23Component index={item} key={item} />
      ))}
    </View>
  );
};

export default Animation23;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  spacer: {
    width: 10,
  },
});
