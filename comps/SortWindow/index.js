import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Pressable } from "react-native";

import {Dimensions} from 'react-native';
// import CenterView from "../../storybook/stories/CenterView";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderColor: "#EDEDED",
    borderWidth: 1,
    width: deviceWidth,
  },
  text: {

  },
  touch: {
    padding: 15,
    backgroundColor: "#EDEDED",
  },
});

const MySortWindow = () => {
  return (
    <View style={[styles.container]}>
      <TouchableHighlight
      style={styles.touch} 
      underlayColor='#2A3858'
        onPress={() => {
          alert("Date Added (oldest) tapped!");
        }}
      >
        <Text style={styles.text}>Date Added (oldest)</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.touch}
        onPress={() => {
          alert("Date Added (newest) tapped!");
        }}
      >
        <Text style={styles.text} >Chronological (oldest) </Text>
      </TouchableHighlight>
      <TouchableHighlight 
      style={styles.touch}
      underlayColor='#2A3858'
        onPress={() => {
          alert("Chronological (oldest) tapped!");
        }}
      >
        <Text style={styles.text}>Chronological (oldest)</Text>
      </TouchableHighlight>
      <TouchableHighlight 
      style={styles.touch}
      underlayColor='#2A3858'
        onPress={() => {
          alert("Chronological (newest) tapped!");
        }}
      >
        <Text style={styles.text}>Chronological (newest)</Text>
      </TouchableHighlight>
    </View>
  );
};


MySortWindow.defaultProps = {};

export default MySortWindow;
