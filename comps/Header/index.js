import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import {Dimensions} from 'react-native';
import { NativeRouter, Link, useHistory } from "react-router-native";

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#2A3858',
    minHeight:80,
    width:"100%",
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
  },
  text: {
    color:'#FFFFFF',
    margin:'auto',
    fontSize:32,
  },
  img: {
    left:10,
    position:'absolute',
    height:24,
    width:22,
    // border: 1
  }
});

const Header = () => {
  return (
      <View style={styles.container}>
        <View  style={styles.img}>
          <Link to="/settings">
           <Image source={require('../../Images/profileicon.png')} />
           </Link>
        </View>
        <Text style={styles.text}>Memoriae</Text>
      </View>
  );
}

Header.defaultProps = {
  
};

export default Header;