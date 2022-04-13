import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import UseStateHook from '../screens/UseStateHook';
import UseEffectHook from '../screens/UseEffectHook';
import UseMemoHook from '../screens/UseMemoHook';
import UseRefHook from '../screens/UseRefHook';

const Navigators = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="useStateHook" component={UseStateHook} />
        <Stack.Screen name="useEffectHook" component={UseEffectHook} />
        <Stack.Screen name="useMemoHook" component={UseMemoHook} />
        <Stack.Screen name="useRefHook" component={UseRefHook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
