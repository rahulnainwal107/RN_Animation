import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({ buttonName, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
