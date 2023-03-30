import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    //if we use keys withing the JS objects, they must be strings and unique compared to all other objects' keys
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 27 },
    { name: 'Friend #5', age: 53 },
    { name: 'Friend #6', age: 77 },
    { name: 'Friend #7', age: 30 },
  ];

  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      //friend argument is going to be a single ofbject from the friends array, initialized above
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      //ES 2015 destructuring
      renderItem={({ item }) => {
        //element === { item: { name: 'Friend #1' }, index: 0}
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
