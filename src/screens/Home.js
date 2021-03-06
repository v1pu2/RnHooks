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
        title="UseLayoutEffect Hook"
        onPress={() => props?.navigation.navigate('useLayoytEffectHook')}
      />
      <Button
        title="UseReducer Hook"
        onPress={() => props?.navigation.navigate('useReducerHook')}
      />
      <Button
        title="UseRef Hook"
        onPress={() => props?.navigation.navigate('useRefHook')}
      />
      <Button
        title="UseImperativeHandle Hook"
        onPress={() => props?.navigation.navigate('useImperativeHandleHook')}
      />
      <Button
        title="UseContext Hook"
        onPress={() => props?.navigation.navigate('useContextHook')}
      />
      <Button
        title="UseMemo Hook"
        onPress={() => props?.navigation.navigate('useMemoHook')}
      />
      <Button
        title="UseCallback Hook"
        onPress={() => props?.navigation.navigate('useCallbackHook')}
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
