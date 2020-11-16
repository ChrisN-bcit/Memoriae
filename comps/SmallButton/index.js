import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, navigate } from "react-native";

const styles = StyleSheet.create({
  container: {
    bottom:0
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#F5F5F5"
  },
  button:{
    backgroundColor:'#2A3858',
    borderRadius:2,
    padding: 10,
    width: 94,
    height: 39,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SmallButton = ({ text, text1}) => {
  return (
      <View style={styles.container}>
        <View style={styles.box}>
        <TouchableOpacity
            style={styles.button}
             underlayColor='#fff'>
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
             underlayColor='#fff'>
            <Text style={styles.text} >{text1}</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
}

SmallButton.defaultProps = {
  text: "Default button",
  text1: "Default button"
};

export default SmallButton;