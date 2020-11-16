import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  },
  update: {
    fontSize: 14,
  },
  container: {
      justifyContent: "flex-start",
  },
});

const TextStatus = ({Name, Update}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.name}>{Name}</Text>
      <Text style={styles.update}>{Update}</Text>
    </View>
  );
}

TextStatus.defaultProps = {
    Name: "default Name",
    Update: "default Update",
}

  

export default TextStatus;