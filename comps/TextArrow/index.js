import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";


import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width*0.85;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"space-between",
    width: deviceWidth,
    padding: 10
  },
  stretch: {
    minWidth: 15,
    minHeight: 20,
    position: "relative",
    resizeMode: 'stretch',
    transform: [{ scaleX: 1 }],
    transform: [{ rotate: "180deg" }]
    
  },
  text: {
    color: '#000000',
    fontSize: 21,
    
  }
});

const TextArrow = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image
        style={styles.stretch}
        source={require("../../Images/backnav.png")}
      />
    </View>
  );
};

TextArrow.defaultProps = {
  text: "Default Name"
};

export default TextArrow;