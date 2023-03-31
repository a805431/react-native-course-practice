import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    //alignItems: 'flex-end' //или 'flex-start', или 'center', default is stretch
    flexDirection: 'row', //'row' or 'column', which is the default
    height: 200,
    // justifyContent: 'flex-end'//'flex-start'-default'center', 'space-between', 'space-around'
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    // flex: 4
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    //flex: 1 causes child 2 to expand and take up as much vertical space as it possibly can
    //flex operates in the same direction as the current value of flexDirection
    // flex: 4
    //alignSelf: 'stretch'//'center', 'flex-start' etc., the same as alignItems property for the parent, alignSelf overwrites it
    // position: 'absolute', //'relative' is the default value
    //left: 10 //also, top, bottom, right for added padding in these directions

    //these 5 below can be replaced with ...StyleSheet.absoluteFillObject
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0
    // ...StyleSheet.absoluteFillObject,
    marginTop: 50, //стана и с top: 50
    backgroundColor: 'green',
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    // flex: 2,
    backgroundColor: 'purple',
  },
});

export default BoxScreen;
