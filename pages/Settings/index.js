import React, {useState, useEffect} from "react";
import globalstyle from "../globalstyle";
import BackMiddleNav from "../../comps/BackMiddleNav";
import TextArrow from "../../comps/TextArrow";
import Button from "../../comps/Button";
import Profile from "../../comps/Profile"
import { View, StyleSheet, Text } from "react-native";
// import CenterView from "../../storybook/stories/CenterView";

import { NativeRouter, Route, Link, useHistory } from "react-router-native";

import {Dimensions} from 'react-native';
import BackNav from "../../comps/BackMiddleNav";
import Button1 from "../../comps/Button";
import { Avatar } from "react-native-elements";

import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const deviceHeightN = Dimensions.get('window').height*0.95;
const deviceHeightT = Dimensions.get('window').height*0.16;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  userProfile: {
   width: deviceWidth,
   height: 200,
  //  backgroundColor: '#DAD',
   height: deviceHeightT,
   marginTop: 30,
  },
  nextRoute: {
    marginTop: 20,
  },
  bottom: {
    position: 'relative',
    bottom: -300,
  }
});

const Settings = () => {

  const history = useHistory();

  const HandleBack = async()=>{
      //do async stuff

      //instead of <Link> route after completing script like backend communication
      history.push("/familyprofile")
  }

  const HandleLogOut = async()=>{
    //do async stuff

    //instead of <Link> route after completing script like backend communication
    history.push("/login")
}

  return (
    // <Link to="/accountsettings" >
    //   <Text>Account sett</Text>
    // </Link>
    <View>
      <View>
        <BackMiddleNav onPress={HandleBack} text="" />
      </View>
      <View style={styles.userProfile}>
        <Link to="familyprofile">
        <Profile text="John Moon" />
        </Link>
      </View>
      <View>
        <View style={styles.nextRoute}>
          <TextArrow text="Account" />
        </View>
        <View>
          <TextArrow text="About" />
        </View>
        <View>
          <Link to="/tutorial">
          <TextArrow text="Help" />
          </Link>
        </View>
      </View>
      <View style={styles.bottom}>
      <Button1 onPress={HandleLogOut} text="Log Out" />
      </View>
    </View>
    
  );
};

export default Settings;