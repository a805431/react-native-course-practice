import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    //alignItems: 'flex-end' //или 'flex-start', или 'center', default is stretch
    // flexDirection: 'row',
    height: 200,
    // justifyContent: 'flex-end'//'flex-start'-default'center', 'space-between', 'space-around'
    alignItems: 'center'
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //flex: 1 causes child 2 to expand and take up as much vertical space as it possibly can
    //flex operates in the same direction as the current value of flexDirection
    // flex: 4
    alignSelf: 'stretch'//'center', 'flex-start' etc., the same as alignItems property for the parent
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 2
  },
});

export default BoxScreen;
