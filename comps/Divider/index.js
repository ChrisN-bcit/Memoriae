import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {Dimensions} from 'react-native';


const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#1F1F1F',
    borderBottomWidth: 1,
    padding: 7,
},
});

const HrDivider = () => {

  return (
    <View style={[styles.container]}>
      
    </View>
  );
}

HrDivider.defaultProps = {
};
  

export default HrDivider;
