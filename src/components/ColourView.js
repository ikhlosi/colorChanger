import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const ColourView = () => {
  // const [colours, setColours] = useState(["red", "green", "blue"]);
  const colours = ["red", "green", "blue"];
  const [colour, setColour] = useState(colours[0]);
  // const [index, setIndex] = useState(0);
  return (
    <View>
      <Text style={{ backgroundColor: colour, marginTop: 50 }}>
        The background colour is: {colour}
      </Text>
      <Button
        title="CHANGE COLOUR"
        onPress={() => {
          index = colours.indexOf(colour) + 1;
          if (index >= colours.length) index = 0;
          setColour(colours[index]);
        }}
      />
    </View>
  );
};

export default ColourView;

const styles = StyleSheet.create({});
