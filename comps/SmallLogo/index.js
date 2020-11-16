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

const EditIcon = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../Images/smallLogo.png')}
      />
    </View>
  );
}

  

export default EditIcon;
