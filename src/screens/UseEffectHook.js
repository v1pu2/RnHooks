import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const UseEffectHook = () => {
  return (
    <View style={styles.root}>
      <Text>this is use effect UseEffectHook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default UseEffectHook;
