import React from 'react';

import {StyleSheet, Button, Text, View} from 'react-native';

const Home = props => {
  return (
    <View style={styles.root}>
      <Button
        title="UseState Hook"
        onPress={() => props?.navigation.navigate('useStateHook')}
      />
      <Button
        title="UseEffect Hook"
        onPress={() => props?.navigation.navigate('useEffectHook')}
      />
       <Button
        title="UseMemo Hook"
        onPress={() => props?.navigation.navigate('useMemoHook')}
      />
       <Button
        title="UseRef Hook"
        onPress={() => props?.navigation.navigate('useRefHook')}
      />
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

export default Home;
