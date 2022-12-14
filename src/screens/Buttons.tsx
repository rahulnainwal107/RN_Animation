import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Button from "../components/Button";

interface animationProps {
  id: number;
  buttonName: string;
  subTitle: string;
  onPress(): void;
}

function Buttons({ navigation }) {
  const onButtonPress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  const [animations, setAnimations] = useState<animationProps[]>([
    {
      id: 1,
      buttonName: "Animation 1",
      subTitle:
        "Animation that will animated using opacity, rotation, scale and borderRadius",
      onPress: onButtonPress.bind(this, "Animation1"),
    },
    {
      id: 2,
      buttonName: "Animation 2",
      subTitle: "",
      onPress: onButtonPress.bind(this, "Animation2"),
    },
    {
      id: 3,
      buttonName: "Animation 3",
      subTitle: "Horizontal animation inside scrollview on scroll",
      onPress: onButtonPress.bind(this, "Animation3"),
    },
    {
      id: 4,
      buttonName: "Image animation",
      subTitle: "Image scale with done press",
      onPress: onButtonPress.bind(this, "Animation4"),
    },
    {
      id: 5,
      buttonName: "Switch Button Animation",
      subTitle: "Switch button animation",
      onPress: onButtonPress.bind(this, "Animation5"),
    },
    {
      id: 6,
      buttonName: "Theme Animation",
      subTitle: "An animation related to theme switching",
      onPress: onButtonPress.bind(this, "Animation6"),
    },
    {
      id: 7,
      buttonName: "Floating Action Button Animation",
      subTitle:
        "An animation related to floating action button animation (Not completed yet)",
      onPress: onButtonPress.bind(this, "Animation7"),
    },
    {
      id: 8,
      buttonName: "Pinch Gesture Handler",
      subTitle: "An animation related to pintch gesture animation",
      onPress: onButtonPress.bind(this, "Animation8"),
    },
    {
      id: 9,
      buttonName: "Youtube Like Button",
      subTitle: "Youtube mobile app like button animation",
      onPress: onButtonPress.bind(this, "Animation9"),
    },
    {
      id: 10,
      buttonName: "Layout Animation",
      subTitle: "Layout animation effect with fade in and fade out",
      onPress: onButtonPress.bind(this, "Animation10"),
    },
    {
      id: 11,
      buttonName: "Accordion Animation",
      subTitle: "Accordion list animation",
      onPress: onButtonPress.bind(this, "Animation11"),
    },
    {
      id: 12,
      buttonName: "Button with loader",
      subTitle: "Zoho people like button",
      onPress: onButtonPress.bind(this, "Animation12"),
    },
    {
      id: 13,
      buttonName: "Button with swip to right",
      subTitle: "Amazon pay swip to right button for payment",
      onPress: onButtonPress.bind(this, "Animation13"),
    },
    {
      id: 14,
      buttonName: "ScrollView Animation",
      subTitle:
        "ScrollView animation when there is an image on top of scrollView",
      onPress: onButtonPress.bind(this, "Animation14"),
    },
    {
      id: 15,
      buttonName: "Phone call animation",
      subTitle: "A kind of phone call animation",
      onPress: onButtonPress.bind(this, "Animation15"),
    },
    {
      id: 16,
      buttonName: "Animation 16",
      subTitle: "A kind of loader animation",
      onPress: onButtonPress.bind(this, "Animation16"),
    },
    {
      id: 17,
      buttonName: "Animation 17",
      subTitle: "A kind of slide",
      onPress: onButtonPress.bind(this, "Animation17"),
    },
    {
      id: 18,
      buttonName: "Animation 18",
      subTitle: "Multiple views",
      onPress: onButtonPress.bind(this, "Animation18"),
    },
    {
      id: 19,
      buttonName: "Animation 19",
      subTitle: "Loading Animation",
      onPress: onButtonPress.bind(this, "Animation19"),
    },
    {
      id: 20,
      buttonName: "Animation 20",
      subTitle: "Flatlist Animation",
      onPress: onButtonPress.bind(this, "Animation20"),
    },
    {
      id: 21,
      buttonName: "Animation 21",
      subTitle: "A kind of sliding on",
      onPress: onButtonPress.bind(this, "Animation21"),
    },
    {
      id: 22,
      buttonName: "Animation 22",
      subTitle: "",
      onPress: onButtonPress.bind(this, "Animation22"),
    },
    {
      id: 23,
      buttonName: "Animation 23",
      subTitle: "",
      onPress: onButtonPress.bind(this, "Animation23"),
    },
    {
      id: 24,
      buttonName: "Animation 24",
      subTitle: "Image slider",
      onPress: onButtonPress.bind(this, "Animation24"),
    },
    {
      id: 25,
      buttonName: "Animation 25",
      subTitle: "Flip Animation",
      onPress: onButtonPress.bind(this, "Animation25"),
    },
  ]);

  const renderItem = ({ item }) => {
    const { buttonName, subTitle, onPress } = item;
    return (
      <Button buttonName={buttonName} subText={subTitle} onPress={onPress} />
    );
  };
  /** No need to add keyExtractor for flatlist below as out data already having id field */
  return (
    <View style={styles.mainContainer}>
      <FlatList data={animations} renderItem={renderItem} />
    </View>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
