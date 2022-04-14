import React, {useEffect, useLayoutEffect} from 'react';

import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const UseLayoutEffectHook = () => {
  useEffect(() => {
    console.log('useEffect call');
  }, []);
  useLayoutEffect(() => {
    console.log('uselayout hook call');
  }, []);
  return (
    <View style={styles.root}>
      <Text>Pedro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    margin: 20,
  },
  txtStyle: {fontSize: 22},
  input: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  },
});

export default UseLayoutEffectHook;
