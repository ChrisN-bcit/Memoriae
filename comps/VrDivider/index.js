import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {Dimensions} from 'react-native';


const styles = StyleSheet.create({
  container: {
    borderRightColor: '#1F1F1F',
    borderRightWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'stretch'
},
});

const VrDivider = () => {

  return (
    <View style={[styles.container]}>
      
    </View>
  );
}

VrDivider.defaultProps = {
};
  

export default VrDivider;
