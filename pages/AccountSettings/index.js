import React , {useState, useEffect} from "react";
import globalstyle from "../globalstyle";
import BackMiddleNav from "../../comps/BackMiddleNav";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
// import CenterView from "../../storybook/stories/CenterView";
import {Dimensions} from 'react-native';
import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const deviceHeight = Dimensions.get('window').height*0.95;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  text: {
    color: '#1F1F1F',
    fontSize: 20,
    marginLeft:30,
    marginTop:10,
    padding: 10,
    justifyContent: "center",
  },
  textbox: {
    marginTop:75,
  },
  continner: {
    backgroundColor:'#FFFFFF',
    margin: 20,
    borderRadius: 10,
    height: deviceHeight,
    
    
  }
});

const AccountSettings = () => {
  return (
    <View style={[globalstyle.rows, styles.cont]}>
      <View style={styles.continner}>
        <BackMiddleNav text="Account" />
        <View style={styles.textbox}>
          <TouchableHighlight activeOpacity={0.6}
  underlayColor="#2A3858"
  onPress={() => alert('Email Pressed!')}>
          <Text style={styles.text}>Email</Text>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.6}
  underlayColor="#2A3858"
  onPress={() => alert('Phone Pressed!')}>
          <Text style={styles.text}>Phone</Text>
          </TouchableHighlight>
        </View> 
      </View>
    </View>
  );
};

export default AccountSettings;