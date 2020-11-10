import React from "react";
import globalstyle from "../globalstyle";
import BackMiddleNav from "../../comps/BackMiddleNav";
import TextArrow from "../../comps/TextArrow";
import Button from "../../comps/Button";
import Profile from "../../comps/Profile"
import { View, StyleSheet, Text } from "react-native";
import CenterView from "../../storybook/stories/CenterView";

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#f5f5f5",
    flex: 1
  },
  text: {
    color: "#1F1F1F",
    fontSize: 20,
    marginLeft: 30,
    marginTop: 10
  },
  continner: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    borderRadius: 10,
    height: "95vh"
  },
  bottom: {
    bottom: "13vh",
    width: "80vw",
    margin: "auto"
  },
bar: {
  marginTop: 30
}
});

const Settings = () => {
  return (
    <View style={[globalstyle.rows, styles.cont]}>
      <View style={styles.continner}>
        <BackMiddleNav text=" " />
          <View style={styles.bar}>
            <Profile text="John Moon"/>
            <TextArrow text="Account"/>
            <TextArrow text="About"/>
            <TextArrow text="Help"/>
          </View>
      </View>
      <View style={styles.bottom}>
        <Button text="Log Out" />
      </View>
    </View>
  );
};

export default Settings;