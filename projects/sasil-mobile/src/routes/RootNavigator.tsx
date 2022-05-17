import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginModal from '@/screens/LoginModal/LoginModal';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Login" component={LoginModal} />
      </Stack.Group>
      {/* Login 후 넘어갈 Stack.Screen  */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
