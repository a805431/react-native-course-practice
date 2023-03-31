import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    //alignItems: 'flex-end' //или 'flex-start', или 'center', default is stretch
    flexDirection: 'row',
    height: 200,
    justifyContent: 'flex-end'//'flex-start'-default'center', 'space-between', 'space-around'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
