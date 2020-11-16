import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#2A3858',
    minHeight:60,
    minWidth:214,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 2,
  },
  text: {
    color:'#FFFFFF',
    fontSize:16,
  },
  img: {
    // fontSize:40,
    height:34,
    width :42,
    marginRight:10,
  }
});

const UploadMedia = ({text}) => {


  return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../Images/addmedia.png')} />
        <Text style={styles.text}>{text}</Text>
      </View>
  );
}

UploadMedia.defaultProps = {
  text: 'Upload Media',
};

export default UploadMedia;