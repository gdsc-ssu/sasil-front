import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { NavItemKey, NAV_INFO, COLORS } from '@sasil/common';
import Navigation from '@/components/organisms/Navigation';
import MainScreen from '@/screens/MainScreen';
import RequestScreen from '@/screens/RequestScreen';
import ExperimentScreen from '@/screens/ExperimentScreen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
});

export const NavWrapper = ({ state, navigation }: BottomTabBarProps) => {
  const navListInfo = state.routes.map((route, index) => {
    const navType = route.name.toLowerCase() as NavItemKey;

    return {
      type: navType,
      name: NAV_INFO[navType].name_kr,
      isFocused: state.index === index,
      onPress: () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (index !== state.index && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      },
    };
  });

  return <Navigation navListInfo={navListInfo} />;
};

const Tab = createBottomTabNavigator();

export interface NavBarProps {
  children: React.ReactNode;
}

// TODO: 각 페이지 컴포넌트로 변경하기
const NavBar = ({ children }: NavBarProps) => (
  <View style={styles.container}>
    <Tab.Navigator
      initialRouteName={NAV_INFO.main.name}
      tabBar={NavWrapper}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={NAV_INFO.main.name} component={MainScreen} />
      <Tab.Screen name={NAV_INFO.request.name} component={RequestScreen} />
      <Tab.Screen
        name={NAV_INFO.experiment.name}
        component={ExperimentScreen}
      />
      {/* <Tab.Screen name={NAV_INFO.user.name} component={Navigation} /> */}
    </Tab.Navigator>
    {children}
  </View>
);

export default NavBar;
