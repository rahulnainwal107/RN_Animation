import React, { useState } from "react";
import { Text, FlatList } from "react-native";

import Animation11Component from "../components/Animation11Component";

interface Animation11Props {
  title: string;
  points: points[];
}

interface points {
  country: string;
  id: number;
}

const Animation11 = () => {
  const [data, setData] = useState<Animation11Props[]>(
    new Array(10)
      .fill({
        title: "Total Points",
        points: [{ point: 99 }, { point: 75 }, { point: 39 }, { point: 45 }],
      })
      .map((_, index) => ({ ..._, id: index }))
  );

  const renderItem = ({ item, index }) => {
    const { title, points } = item;
    return <Animation11Component title={title} points={points} />;
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

export default Animation11;
