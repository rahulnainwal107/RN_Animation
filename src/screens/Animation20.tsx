import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Animated20Component from "../components/Animated20Component";

const Animation20 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(i);
    }
    setData(arr);
  }, []);

  const renderItem = ({ item, index }) => {
    return <Animated20Component item={item} index={index} />;
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Animation20;

const styles = StyleSheet.create({
  main: {
    marginTop: 60,
  },
});
