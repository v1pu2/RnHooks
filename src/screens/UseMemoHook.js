import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, Button} from 'react-native';

const UseMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        console.log('response');
        setData(response?.data);
      });
  }, []);

  const findLongestName = comments => {
    if (!comments) return null;

    let longName = '';
    for (let i = 0; i < comments.length; i++) {
      let curName = comments[i].name;
      if (curName.length > longName.length) {
        longName = curName;
      }
    }
    console.log('This fun call');
    return longName;
  };

  //  with the help of useMemo, call this function when data is changed.
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <View style={styles.root}>
      <Text>Longets name with use memo hook</Text>
      <Text>{getLongestName}</Text>
      <Button title="Toggle" onPress={() => setToggle(!toggle)} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default UseMemoHook;
