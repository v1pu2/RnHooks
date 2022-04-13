import React, {useState} from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.txtCount}>{count}</Text>
      <Button title="Increment" onPress={() => increment()} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCount: {
    fontSize: 16,
  },
});

export default UseStateHook;
