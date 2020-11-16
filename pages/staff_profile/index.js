import React, {useState, useEffect} from "react";
import Header from '../../comps/Header';
import UploadMedia from '../../comps/UploadMedia';
import StoryBox from '../../comps/StoryBox';
import MyAvatar from '../../comps/Avatar';
import Story from '../../comps/Story';
import MyPreferences from '../../comps/Preferences';
import TextName from '../../comps/TextName';
import HrDivider from '../../comps/Divider';
import VrDivider from '../../comps/VrDivider';
import TimePic from '../../comps/TimePic';
import SortButton from '../../comps/SortButton';
import SortWindow from '../../comps/SortWindow';

import { NativeRouter, Link, useHistory } from "react-router-native";
import {View, StyleSheet, Text, ScrollView, Image, Button, BlurView, TouchableOpacity} from "react-native";
import {Dimensions} from 'react-native';

import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const deviceWidthP = Dimensions.get('window').width*0.90;
const deviceWidthS = Dimensions.get('window').width*0.60;
const deviceHeightF = Dimensions.get('window').height;
const deviceWidthF = Dimensions.get('window').width;

const styles = StyleSheet.create({
  homecont: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5"
  },
  likes: {
    flexDirection: "row",
  },
  media: {
    position: "absolute",
    width: deviceWidthF,
    bottom: 80,
  },
  timeline: {
    width: deviceWidthP,
    fontSize: 24,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 15,
    zIndex: 1,
  },
  HrDividerS: {
    marginTop: -25,
    marginBottom: 25,
  },
  sortPopup: {
    position: 'absolute',
    // marginTop: "100%",
    left: 160,
    top: 60,
    zIndex: 10,
    backgroundColor:"#F1F1F1",
    opacity: 0.9,
    // height: deviceHeightF,
    // justifyContent: "center",

  },
})

const StaffProfile= () => {

  const [shouldShow, setShouldShow] = useState(true);

  return (
    <View style={styles.homecont}>
        <Header />
      <ScrollView>
      <View style={styles.image}>
          <StoryBox>
            <MyAvatar dim={180}/>
              <TextName style={styles.name} text="John Moon" />
          </StoryBox>
          <HrDivider />
        </View>
        <StoryBox>
          <View style={styles.likes}>
            <MyPreferences dim={170} p_title="Likes" p_contentfood="Dessert: Brownies" p_contentcolour="Colour: Orange" p_contentanimal="Animal: Parrots" p_contentseason="Season: Fall"/>
            <VrDivider />
            <MyPreferences dim={180} p_title="Dislikes" p_contentfood="Food: Mushrooms" p_contentcolour="Colour: Brown" p_contentanimal="Animal: Lizzards" p_contentseason="Season: Winter"/>
          </View>
        </StoryBox>
        <View>
           <StoryBox>
            <Story s_title="Pinned Stories" s_date="October 23, 1967" s_telling="When John was 22, he backpacked across New Zealand. His favourite memory from this trip was surfing every morning, he would carry his surfboard everywhere. He was tempted to settle down in New Zealand, but shortly after met the love of his life during a christmas party at home." />
        </StoryBox>
        <HrDivider />
        </View>
        <StoryBox>
        <View style={styles.timeline}>
        <Text >Timeline</Text>
        <View>
          <TouchableOpacity  onPress={() => setShouldShow(!shouldShow)}>
            <SortButton />
          </TouchableOpacity>
        </View>
       
        </View>
        <View style={styles.sortPopup}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <SortWindow />
        ) : null}
      </View>
       <View>
         <TimePic caption="john on his way to hawaii for spring break during college" date="April 21, 1965" />
         <View style={styles.HrDividerS}>
         <HrDivider />
         </View>
       </View>
       <View>
         <TimePic imgurl={require("../../Images/johnswim.png")} date="May 21, 1965" />
       </View>
       </StoryBox>
        </ScrollView>
        {/* <View style={styles.media} >
          <Link to="/upload">
            <UploadMedia />
          </Link>
        </View> */}
    </View>
  )
}


export default StaffProfile;