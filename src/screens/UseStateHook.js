import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const UseStateHook = () => {
  return (
    <View style={styles.root}>
      <Text>this is usestate hook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default UseStateHook;
