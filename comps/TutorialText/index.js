import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    
  },
  text: {
    fontSize:20,
    marginLeft:30,
    marginBottom:10
  },
  text2:{
    fontSize:12,
    marginLeft:60
  }
});

const TutorialText = ({ text,desc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text2}>{desc}</Text>
    </View>
  );
};

TutorialText.defaultProps = {
  text: "Tutorial Name",
  desc: "Tutorial Description"
};

export default TutorialText;