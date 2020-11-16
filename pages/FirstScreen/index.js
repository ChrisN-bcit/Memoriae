import React, { useState, useEffect } from 'react';
import globalstyle from '../globalstyle';
import Logo from '../../comps/Logo';
import Button1 from '../../comps/Button';
import { NativeRouter, Route, Link, useHistory } from 'react-router-native';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ForgotPasswordScreen from '../ForgotPassword';
import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'white',
    alignItems: 'center',
    // height: deviceHeight,
  },
  Mlogo: {
    marginTop: 140,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 40,
    height: 200,
  },
  text: {
    color: '#1F1F1F',
  },
  button: {
    width: 320,
  },
});

const FirstScreen = () => {
  //routing with useHistory
  const history = useHistory();
  //do async stuff
  const HandleLogin = async () => {
    //instead of <Link> route after completing script like backend communication
    history.push('/login');
    console.log("logged in!");
  };

  const HandleRegister = async () => {
    //do async stuff
    //instead of <Link> route after completing script like backend communication
    history.push('/login');
    console.log('Registerred!');
  };
  return (
    <View style={[globalstyle.rows, styles.cont]}>
      <View style={styles.Mlogo}>
        <Logo />
      </View>
      <View style={styles.inner}>
        <View style={styles.button}>
          <View>
            <Button1
              onPress={HandleLogin}
              style={styles.button}
              text="Log In"
            />
          </View>
        </View>
        <Link underlayColor="#f0f4f7" to="/forgotpassword">
          <Text style={styles.text}>Forgot your password?</Text>
        </Link>
        <View style={styles.button}>
          <Button1
            onPress={HandleRegister}
            style={styles.button}
            text="Register"
          />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
