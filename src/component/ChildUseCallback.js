import React, {useEffect} from 'react';
import {AppContext} from '../screens/UseContextHook';
import {StyleSheet, Text, View} from 'react-native';

const ChildUseCallback = ({returnComment}) => {
  useEffect(() => {
    console.log('fun called');
  }, [returnComment]);

  return (
    <View style={styles.root}>
      <Text>{returnComment('Pedro')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    alignItems: 'center',
  },
});

export default ChildUseCallback;
