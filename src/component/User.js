import React, {useContext} from 'react';
import {AppContext} from '../screens/UseContextHook';
import {StyleSheet, Text, View} from 'react-native';


const User = () => {
  const {userName} = useContext(AppContext);
  return (
    <View style={styles.root}>
      <Text >User :{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    alignItems: 'center',
  },
});

export default User;
