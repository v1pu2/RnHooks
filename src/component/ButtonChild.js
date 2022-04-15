import React, {useState, forwardRef, useImperativeHandle} from 'react';

import {StyleSheet, Text, Button, View, TextInput} from 'react-native';

const ButtonChild = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <View style={styles.root}>
      <Button title="Button from child" />
      {toggle && <Text>Toggle</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonChild;
