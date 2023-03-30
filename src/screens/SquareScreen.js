import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//state не е същата променлива от array-я, а е { red: 0, green: 0, blue: 0 }
//action describes how to change the state object
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: +15 || -15 };

  switch (action.colorToChange) {
    case 'red':
      //never goin to do: state.red = state.red - 15
      //we're building a brand new object instead
      //we are returning whatever this ternary expression evaluates to
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  //it's a convention to call dispatch dispatch, we could call it abcd or runMyReducer or whatever
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  // console.log(state); //{ red: 0, green: 0, blue: 0 }
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
