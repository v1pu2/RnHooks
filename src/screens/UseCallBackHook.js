import React, {useEffect, useState, useCallback} from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';
import ChildUseCallback from '../component/ChildUseCallback';

const UseCallBackHook = () => {
  const [data, setData] = useState('Yo, plz sub to the channel! ');
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    name => {
      return data + name;
    },
    [data],
  );

  return (
    <View style={styles.root}>
      <ChildUseCallback returnComment={returnComment} />
    
      <Button title="Toggle" onPress={() => setToggle(!toggle)} />
      {toggle && <Text>Toggle......</Text>}
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

export default UseCallBackHook;
