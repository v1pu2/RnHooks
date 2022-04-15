import React, {useReducer} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1, showText: state.showText};
    case 'TOGGLESHOWTEXT':
      return {count: state.count, showText: !state.showText};

    default:
      return state;
  }
};
const useReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
  return (
    <View style={styles.root}>
      <Text>{state.count}</Text>
      <Button
        title="Click here"
        onPress={() => {
          dispatch({type: 'INCREMENT'});
          dispatch({type: 'TOGGLESHOWTEXT'});
        }}
      />
      {state.showText && <Text>this is text</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default useReducerHook;
