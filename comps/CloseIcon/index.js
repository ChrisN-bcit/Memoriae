import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    },
        stretch: {
        // maxWidth: 35,
        // maxHeight: 35,
        // resizeMode: 'fit',
        },
});

const CloseIcon = ({dim}) => {

  return (
    <View style={[styles.container]}>
          <Image
          style={styles.stretch}
          source={require('../../Images/close.png')}
          resizeMode={"cover"} />
    </View>
  );
}

CloseIcon.defaultProps = {
  dim: 10
};
  

export default CloseIcon;
