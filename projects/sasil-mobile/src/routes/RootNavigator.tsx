import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostDetailScreen from '@/screens/PostDetailScreen';
import PostWriteScreen from '@/screens/PostWriteScreen';
import LoginModal from '@/screens/LoginModal';
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
        <Stack.Screen name="MainStack" component={BottomTabNavigator} />
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            cardStyle: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Stack.Screen name="Login" component={LoginModal} />
          <Stack.Screen name="PostDetail" component={PostDetailScreen} />
          <Stack.Screen name="PostWrite" component={PostWriteScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
);

export default RootNavigator;
