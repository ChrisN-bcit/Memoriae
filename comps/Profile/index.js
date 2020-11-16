import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Avatar from "../Avatar"

import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width*0.85;
const deviceWidthH = Dimensions.get('window').width*0.60;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    // marginLeft:25,
    // marginRight:25,
    // marginBottom:15,
    // backgroundColor: '#FAD',
    alignItems:"center",
    width: deviceWidth,
    padding: 10
  },
  stretch: {
    minWidth: 15,
    minHeight: 20,
    resizeMode: "stretch",
    position: "relative",
    transform: [{ scaleX: 1 }],
    transform: [{ rotate: "180deg" }]
    
  },
  text: {
    color: "#000000",
    fontSize: 24,
    
  },
box: {
  flexDirection: "row",
  justifyContent: 'space-between',
  // top:20,
  // backgroundColor: 'blue',
  width: deviceWidthH,
  margin: 10,
  alignItems:"center",
},
text2: {
  fontSize:12
},
txt: {
// left:-30
}
});

const Profile = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Avatar dim= {90}/>
        <View style={styles.txt}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text2}>View Profile</Text>
        </View>
      </View>
      
      <View style={styles.arrow}>
        <Image
          style={styles.stretch}
          source={require("../../Images/backnav.png")}
        />
      </View>
    </View>
  );
};

Profile.defaultProps = {
  text: "Default Name"
};

export default Profile;