import * as React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/Button";

function Buttons({ navigation }) {
  const onButtonPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        buttonName={"Animation 1"}
        subText="Animation that will animated using opacity, rotation, scale and borderRadius"
        onPress={onButtonPress.bind(this, "Animation1")}
      />
      <Button
        buttonName={"Animation 2"}
        subText=""
        onPress={onButtonPress.bind(this, "Animation2")}
      />
      <Button
        buttonName={"Animation 3"}
        subText="Horizontal animation inside scrollview on scroll"
        onPress={onButtonPress.bind(this, "Animation3")}
      />
      <Button
        buttonName={"Image animation"}
        subText="Image scale with done press"
        onPress={onButtonPress.bind(this, "Animation4")}
      />
      <Button
        buttonName={"Switch Button Animation"}
        subText="Switch button animation"
        onPress={onButtonPress.bind(this, "Animation5")}
      />
      <Button
        buttonName={"Theme Animation"}
        subText="An animation related to theme switching"
        onPress={onButtonPress.bind(this, "Animation6")}
      />
      <Button
        buttonName={"Floating Action Button Animation"}
        subText="An animation related to floating action button animation (Not completed yet)"
        onPress={onButtonPress.bind(this, "Animation7")}
      />
      <Button
        buttonName={"Pinch Gesture Handler"}
        subText="An animation related to pintch gesture animation"
        onPress={onButtonPress.bind(this, "Animation8")}
      />
    </View>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
