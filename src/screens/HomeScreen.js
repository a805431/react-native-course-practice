import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

//whenever a created component is passed a props object, it always shows up as the first argument to this function
//here we no longer have access to the props object, but just its navigation property
const HomeScreen = ({ navigation }) => {
  //anytime the HomeScreen appears on the device, this console.log should appear in the terminal at the exact same time
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Components');
        }}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          navigation.navigate('List');
        }}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => {
          navigation.navigate('Image');
        }}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => {
          navigation.navigate('Counter');
        }}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => {
          navigation.navigate('Color');
        }}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => {
          navigation.navigate('Square');
        }}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => {
          navigation.navigate('Text');
        }}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
