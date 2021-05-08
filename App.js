import React from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import Broadcaster from './screens/Broadcaster';
import Viewer from './screens/Viewer';
import Home from './screens';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="broadcaster" component={Broadcaster} />
        <Stack.Screen name="viewer" component={Viewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
