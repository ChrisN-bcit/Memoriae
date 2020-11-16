import React , {useState, useEffect} from "react";
import globalstyle from "../globalstyle";
import BackMiddleNav from "../../comps/BackMiddleNav";
import TutorialText from "../../comps/TutorialText";
import StoryBox from '../../comps/StoryBox';
import { View, StyleSheet, Text, Image } from "react-native";
// import CenterView from "../../storybook/stories/CenterView";
import SmallButton from "../../comps/SmallButton";

import {Dimensions} from 'react-native';
import { NativeRouter, Route, Link, useHistory } from "react-router-native";

import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const deviceHeightN = Dimensions.get('window').height*0.95;
const deviceHeightF = Dimensions.get('window').height*0.65;
const deviceWidth = Dimensions.get('window').width*0.95;

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'column',
    width: deviceWidth,
    height: deviceHeightN,
  },
  stretch: {
      height: deviceHeightF,
        resizeMode: "contain",
          // width:"auto",
  },
  head: {
    width: deviceWidth,
  },
  box: {
    marginTop: 60,
    // marginBottom: 20,
  },
  bottom: {
    // position:"fixed",
    // bottom: 0,
    width:"100%"
  },
});

const Tutorial = () => {


  const history = useHistory();

  const HandleBack = async()=>{
      //do async stuff

      //instead of <Link> route after completing script like backend communication
      history.push("/settings")
  }

  return (
    <View style={[globalstyle.rows, styles.cont]}>
      <StoryBox>
        <View style={styles.head}>
      <BackMiddleNav onPress={HandleBack} text="Help" />
      </View>
      <View style={styles.box}>
        <TutorialText text='Tutorial' desc='description' />
        <Image
          style={styles.stretch}
          source={require('../../Images/tut.png')}
        />
      </View>
      <View style={styles.bottom}>
        <SmallButton text='Back' text1='Next'/>
      </View>
      </StoryBox>
    </View>
  );
};

export default Tutorial;