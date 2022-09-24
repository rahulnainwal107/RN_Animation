import React, { useState } from "react";
import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import Animation10Button from "../components/Animation10Button";

interface arrayDataProps {
  id: number;
}

const Animation10 = () => {
  const [data, setData] = useState<arrayDataProps[]>(
    []
    // new Array(10).fill(0).map((_, index) => ({
    //   id: index,
    // }))
  );

  const onPress = (id: number) => {
    const filteredItem = data.filter((item) => item.id !== id);
    setData(filteredItem);
  };

  const addItem = () => {
    const itemId = data.length ? data.length : 0;
    setData([...data, { id: itemId }]);
  };

  const renderItem = ({ item, index }) => {
    return <Animation10Button onPress={onPress.bind(this, item.id)} />;
  };

  return (
    <>
      <FlatList data={data} renderItem={renderItem} />
      <TouchableOpacity style={styles.floatingButton} onPress={addItem}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default Animation10;

const styles = StyleSheet.create({
  floatingButton: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: "black",
    elevation: 5,
    shadowColor: "grey",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    right: 15,
    bottom: 15,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "white", fontSize: 20, fontWeight: "bold" },
});
