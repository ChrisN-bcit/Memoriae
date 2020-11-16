import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 24,
    marginTop: 10,
  },
  container: {
  },
});

const TextName = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

TextName.defaultProps = {
    text: "default text",
}

  

export default TextName;
