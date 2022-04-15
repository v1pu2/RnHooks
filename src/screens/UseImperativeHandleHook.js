import React, {useRef} from 'react';

import {StyleSheet, View, Button} from 'react-native';
import ButtonChild from '../component/ButtonChild';

// useCase => call button click with ref from parent for child class. with ref get the current method and change the state value of child from parent
const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null);
  return (
    <View style={styles.root}>
      <Button
        title="Parent button"
        onPress={() => {
          buttonRef.current.alterToggle();
        }}
      />
      <ButtonChild ref={buttonRef} />
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

export default UseImperativeHandleHook;
