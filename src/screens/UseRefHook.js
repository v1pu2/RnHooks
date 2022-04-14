import React, {useRef} from 'react';

import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const UseRefHook = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
    console.log('inupt ref val', inputRef.current.value);
  };
  const onChange = value => {
    inputRef.current = value;
  };
  return (
    <View style={styles.root}>
      <Text>Pedro</Text>
      <View style={styles.rowView}>
        <TextInput
          placeholder="Enter name"
          style={styles.input}
          ref={inputRef}
          onChange={val => onChange(val)}
        />
        <Button title="change name" onPress={() => onClick()} />
      </View>
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

export default UseRefHook;
