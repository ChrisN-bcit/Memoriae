import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    },
        stretch: {
        minWidth: 55,
        minHeight: 55,
        resizeMode: 'stretch',
        },
});

const Logo = ({text}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../Images/MainLogo.png')}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

  

export default Logo;
