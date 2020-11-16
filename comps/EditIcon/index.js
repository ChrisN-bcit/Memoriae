import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    },
        stretch: {
        minWidth: 15,
        minHeight: 20,
        resizeMode: 'stretch',
        },
});

const EditIcon = ({text}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../Images/edit.png')}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

  

export default EditIcon;
