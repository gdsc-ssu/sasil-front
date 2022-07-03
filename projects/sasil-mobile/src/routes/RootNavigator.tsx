import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginModal from '@/screens/LoginModal';
import MainScreen from '@/screens/MainScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const RootNavigator = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Login" component={LoginModal} />
      </Stack.Group> */}
        {/* Login 후 넘어갈 Stack.Screen  */}
        <Stack.Screen name="MainStack" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
);

export default RootNavigator;
