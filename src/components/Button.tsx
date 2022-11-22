import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  buttonName: string;
  subText?: string;
  onPress(): void;
}

const Button: React.FC<ButtonProps> = ({ buttonName, subText, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonName}</Text>
      {subText && <Text style={styles.subText}>( {subText} )</Text>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});
