import React, { Component } from 'react';
import {useState} from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
container: {
    borderColor: 'gray', 
    // borderWidth: 1, 
    padding: 10, 
    // backgroundColor: '#DAD',
    // borderColor: "#1F1F1F", 
    minHeight: 40,
    flex: 1,
    textAlignVertical: 'top',
    },
    text: {
        color:  "#1F1F1F", 
    },
    big: {
      flex: 1,
    },
});

const InputTitle = ({ placeholder }) => {

  const [text, setText] = useState('');
      return (
      <View style={styles.big}>
        <TextInput style={[styles.container, styles.height]}
         placeholder={placeholder}
         multiline={true}
        onChangeText={text => setText(text)}
        defaultValue={text}>
        </TextInput>
        </View>
    );
  }
  
  InputTitle.defaultProps = {
    placeholder: "Default Input Title",
  };

export default InputTitle;
