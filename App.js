import React, {useState, useEffect} from "react";
import {View, StyleSheet} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

import FirstScreen from './pages/FirstScreen'
import ForgotPassword from './pages/ForgotPassword'
import LogInScreen from './pages/LogIn'
import Staff_home from './pages/staff_home';
import StaffProfile from './pages/staff_profile';
import NewPost from './pages/NewPost';
import NewPostScreen from "./pages/NewPost";
import FamilyProfile from './pages/family_profile';
import Settings from './pages/Settings';
import AccountSettings from './pages/AccountSettings';
import Tutorial from './pages/Tutorial';

import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const styles = StyleSheet.create({
    maintcont: {
        height: deviceHeight,
    },
  });

const App = () => {
    return <NativeRouter>
        <View style={styles.maincont}>
            <Route exact path="/" component={FirstScreen} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/login" component={LogInScreen} />
            <Route path="/staffhome" component={Staff_home} />
            <Route path="/staffprofile" component={StaffProfile} />
            <Route path="/upload" component={NewPostScreen} />
            <Route path="/familyprofile" component={FamilyProfile} />
            <Route path="/settings" component={Settings} />
            <Route path="/accountsettings" component={AccountSettings} />
            <Route path="/tutorial" component={Tutorial} />
        </View>
        </NativeRouter>
    
};

export default App;