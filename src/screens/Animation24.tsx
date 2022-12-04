import React from "react";
import { View } from "react-native";

import Animation24Component from "../components/Animation24Component";

const images = [
  require("../assets/images/1.jpeg"),
  require("../assets/images/2.jpg"),
  require("../assets/images/3.jpeg"),
  require("../assets/images/4.jpeg"),
  require("../assets/images/cloud.jpeg"),
];

const Animation24 = () => {
  return (
    <View>
      {images.map((image) => (
        <Animation24Component image={image} />
      ))}
    </View>
  );
};

export default Animation24;
