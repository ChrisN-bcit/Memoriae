import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyPreferences = ({ p_title, p_contentfood, p_contentanimal, p_contentcolour, p_contentmusic, p_contentseason, dim}) => {
  return (
    <View style={styles.container} width={dim}>
      <Text style={styles.p_title} p_title={p_title}>
        {p_title}
      </Text>
      <Text style={styles.p_content} p_content={p_contentmusic}>
        {p_contentmusic}
      </Text>
      <Text style={styles.p_content} p_content={p_contentseason}>
        {p_contentseason}
      </Text>
      <Text style={styles.p_content} p_content={p_contentcolour}>
        {p_contentcolour}
      </Text>
      <Text style={styles.p_content} p_content={p_contentanimal}>
        {p_contentanimal}
      </Text>
      <Text style={styles.p_content}>
          {p_contentfood}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  p_title: {
    fontSize: 20,
    fontWeight: "bold",
    // position: "relative",
    // bottom: 10
  },
  p_content: {
    fontSize: 15,
    padding: 1,
    // position: "relative",
    // top: 0,
    // left: 10,
    // bottom: 20
  },
});

MyPreferences.defaultProps = {
  p_title: "Preference",
  p_contentfood: "preference food",
  p_contentanimal: "preference animal",
  p_contentcolour: "preference colour",
  // p_contentanimal: "preference animal",
  p_contentseason: "preference season",
  dim: 30,
};

export default MyPreferences;
