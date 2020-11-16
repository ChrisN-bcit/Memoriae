import React , {useState, useEffect} from "react";
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import UploadMedia from '../../comps/UploadMedia';
import CloseIcon from '../../comps/CloseIcon';
import StoryBox from '../../comps/StoryBox';
import TextName from '../../comps/TextName';
import InputTitle from '../../comps/InputTitle';
import HrDivider from '../../comps/Divider';

import {Dimensions} from 'react-native';

const deviceWidthButton = Dimensions.get('window').width*0.85;
const deviceWidthF = Dimensions.get('window').width;
const deviceWidthH = Dimensions.get('window').width*0.90;
const deviceHeightP = Dimensions.get('window').height*0.70;
const deviceHeightT = Dimensions.get('window').height*0.10;

import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";


import { NativeRouter, Link, useHistory } from "react-router-native";
import {View, StyleSheet, Text} from "react-native";

import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const styles = StyleSheet.create({
    upperBox: {
        flexDirection: 'row',
        width: deviceWidthH,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#FAD',
        margin: 5,
    },
    mcont: {
        alignItems: 'center',
    },
    textN: {
        color: "#2A3858",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 10,
    },
    input: {
        width: deviceWidthH,
        height: deviceHeightP,
        borderStyle: 'solid',
        borderColor: '#1F1F1F',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 35,
    },
    title: {
        height: deviceHeightT,
        alignItems: 'flex-start',
        width: deviceWidthH,
    },
    divider: {
        width: deviceWidthH,
    },
    media: {
        width: deviceWidthButton,
        position: 'absolute',
        bottom:10
    }
})

const NewPostScreen = () => {

    // async function hasAndroidPermission() {
    //     const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      
    //     const hasPermission = await PermissionsAndroid.check(permission);
    //     if (hasPermission) {
    //       return true;
    //     }
      
    //     const status = await PermissionsAndroid.request(permission);
    //     return status === 'granted';
    //   }
      
    //   async function openCameraRoll() {
    //     if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    //       return;
    //     }
      
    //     CameraRoll.getAlbums(params, {All })
    //   };
      

    return (
        <View style={styles.mcont}>
            <View style={styles.upperBox}>
                <Link to="/familyprofile">
                <CloseIcon />
                </Link>
                <TextName text="New post" />
                <Link to="/familyprofile">
                <Text style={styles.textN}>Next</Text>
                </Link>
            </View>
            <View style={styles.title}>
                <InputTitle placeholder="Story title"/>
                <View  style={styles.divider}>
                <HrDivider />
                </View>
                <InputTitle placeholder="Story Date"/>
                <View  style={styles.divider}>
                <HrDivider />
                </View>
            </View>
            <View>
                <View style={styles.input} >
                <InputTitle placeholder="type your story" />
                </View>
            </View>
            <View style={styles.media}>
                <UploadMedia />
            </View>
        </View>
    );
};

export default NewPostScreen;

// const styles = StyleSheet.create({
//     cont: {
//         backgroundColor: "white",
//         alignItems: "center",
//         // flex: 1,
//         margin: 15,
//         borderRadius: 5,
//         // justifyContent: "center"
//     },
//     main: {
//         backgroundColor: "#F5F5F5",
//         flex: 1,
//     },
//     header: {
//        flexDirection: "row",
//        justifyContent: "space-evenly",
//        width: deviceWidth,
//        alignItems: "baseline",
//        marginTop: 10,
//        marginBottom: 30,
//     },
//     title: {
//         fontWeight: "bold",
//         fontSize: 22,
//     },
//     NextT: {
//         color: "#2A3858",
//         fontWeight: "bold",
//         fontSize: 14
//     },
//     inner: {
//         alignItems: "center",
//     },
//     line: {
//         width: 340,
//         height: 1,
//         borderColor: "black",
//         borderWidth: 0.5,
//         marginTop: 2,
//     },
//     text: {
//         fontSize: 16,
//     },
//     button: {
//         // alignItems: "center",
//         // position: "absolute",
//         bottom: 70,
//         width: 320,
//         maxHeight: 50,
    
//     },
//     date: {
//         marginTop: 40,
//     },
//     type: {
//         height: 480,
//         width: deviceWidth,
//         alignItems: "center",
//         zIndex: 5,
//         // justifyContent: "center",
//         // borderRadius: 15,
//         // borderColor: "black",
//         // borderWidth: 0.5,
//     },
//     input: {
//         width: deviceWidthH,
//         height: 490,
//         borderRadius: 15,
//         marginTop: 40,
//         zIndex: 10,
//     },
//     close: {
//         // alignSelf: 'auto',
//         backgroundColor: '#FAD',
//         width: 40,
//         // marginBottom: 25,r
//     },
// });

// const NewPostScreen = () => {

//     return (
//         <View style={styles.main}>
//             <View style={[globalstyle.rows, styles.cont]}>
//                 <View style={styles.header}>
//                     <View style={styles.close}>
//                         <Link to="/familyprofile">
//                             <CloseIcon />
//                         </Link>
//                     </View>
//                     <Text style={styles.title}>New Post</Text>
//                     <View>
//                     <Link to="/familyprofile">
//                     <Text style={styles.NextT}>Next</Text>
//                     </Link>
//                     </View>
//                 </View>
//                 <View style={styles.inner}>
//                     <View styles={styles.h1}>
//                         <Text style={styles.text}>Story Title</Text>
//                         <View style={styles.line} />
//                     </View>
//                     <View style={styles.date}>
//                         <Text style={styles.text}>Story Title</Text>
//                         <View style={styles.line} />
//                     </View>
//                     <View style={styles.type}>
//                         <View style={styles.input}>
//                             <Input placeholder="start typing..." />
//                         </View>
//                         <View style={styles.button} >
//                             <UploadMedia onPress={() => {
//           alert("Date Added (oldest) tapped!");
//         }} text="Add Pictures" />
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default NewPostScreen;
