import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';

const UseEffectHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        console.log('response');
        setData(response?.data);
      });
  }, []);

  return (
    <View style={styles.root}>
      <Text>Email : {data[0]?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UseEffectHook;
