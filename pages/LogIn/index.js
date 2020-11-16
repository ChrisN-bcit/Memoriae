import React, {useState, useEffect} from 'react';
import globalstyle from '../globalstyle';
import Input from '../../comps/Input';
import SmallLogo from '../../comps/SmallLogo';
import Button1 from '../../comps/Button';
import CloseIcon from '../../comps/CloseIcon';
import PassInput from '../../comps/PassInput';

import { View, StyleSheet, Text } from 'react-native';
import { NativeRouter, Link, useHistory } from 'react-router-native';
import axios from 'axios';
// import { createApi, createAuthApi } from '../../js_client_api';

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  // main: {
  //     backgroundColor: "#F5F5F5",
  //     // flex: 1,
  // },
  Mlogo: {
    position: 'absolute',
    left: 5,
    top: 10,
  },
  close: {
    position: 'absolute',
    right: 30,
    top: 35,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
  },
  text: {
    color: '#1F1F1F',
    margin: 5,
  },
  button: {
    marginTop: 70,
    width: 300,
  },
  input: {
    margin: 10,
    width: 300,
    height: 45,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textW: {
    marginTop: 4,
    alignItems: 'center',
  },
});

const LogInScreen = () => {
  const history = useHistory();

  const HandleLogin = async (l_name, l_pass) => {
    console.log('Logging in');
    // do async stuff
    // var resp = await axios.post("https://mem.terse.live/api/login", {
    //   username: l_name,
    //   password: l_pass
    // })
    console.log('Logged in!');
    //instead of <Link> route after completing script like backend communication
    history.push("/staffhome");
  };
  return (
    <View style={styles.main}>
      <View style={[globalstyle.rows, styles.cont]}>
        <View style={styles.Mlogo}>
          <SmallLogo />
        </View>
        <View style={styles.close}>
          <Link to="/">
            <CloseIcon />
          </Link>
        </View>
        <View style={styles.inner}>
          <View style={styles.input}>
            <Input placeholder="Username" />
          </View>
          <View style={styles.input}>
            <PassInput type="passoword" placeholder="Password" />
          </View>
          <View style={styles.button}>
            <Button1
              onPress={HandleLogin}
              style={styles.button}
              text="Log In"
            />
          </View>
          <View style={styles.textW}>
            <Link to="/forgotpassword">
              <Text style={styles.text}>Forgot your password?</Text>
            </Link>
            <View style={styles.textLine}>
              <Text style={styles.text}>Don't have an acccount?</Text>
              <Text style={styles.textBold}> Register</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogInScreen;
