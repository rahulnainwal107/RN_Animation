import React from "react";
import {
  View,
  ImageSourcePropType,
  StyleSheet,
  ImageBackground,
} from "react-native";

type Animation24ComponentProps = {
  image: ImageSourcePropType;
};

const Animation24Component: React.FC<Animation24ComponentProps> = ({
  image,
}) => {
  return (
    <ImageBackground
      source={image}
      style={styles.imageStyle}
      resizeMode="cover"
    >
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          backgroundColor: "black",
          position: "absolute",
          bottom: 20,
        }}
      ></View>
    </ImageBackground>
  );
};

export default Animation24Component;

const styles = StyleSheet.create({
  imageStyle: {
    height: 180,
    width: "100%",
    position: "absolute",
    alignItems: "center",
  },
});
