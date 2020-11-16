import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 16,
  },
  container: {
  },
});

const TextGreeting = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name}, here is a glance at your patients for today</Text>
    </View>
  );
}

TextGreeting.defaultProps = {
    name: "default name",
}

  

export default TextGreeting;
