import React, {useContext} from 'react';
import {AppContext} from '../screens/UseContextHook';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Login = () => {
  const {setUserName} = useContext(AppContext);
  return (
    <View style={styles.root}>
      <Text>Login</Text>
      <TextInput
        placeholder="Enter name"
        style={styles.input}
        onChangeText={val => {
          setUserName(val);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    // height: 50,
    width: 200,
    marginVertical: 20,
  },
});

export default Login;
