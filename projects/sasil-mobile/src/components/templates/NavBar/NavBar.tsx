import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { NavItemType, NAV_INFO } from '@sasil/common';
import Navigation from '@/components/organisms/Navigation';
import * as styles from './NavBar.style';

export const NavWrapper = ({ state, navigation }: BottomTabBarProps) => {
  const navListInfo = state.routes.map((route, index) => {
    const navType = route.name as NavItemType;

    return {
      type: navType,
      name: NAV_INFO[navType].name,
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
  <styles.StyledNavBar>
    <Tab.Navigator
      initialRouteName={NAV_INFO.Main.type}
      tabBar={NavWrapper}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={NAV_INFO.Main.type} component={Navigation} />
      <Tab.Screen name={NAV_INFO.Request.type} component={Navigation} />
      <Tab.Screen name={NAV_INFO.Experiment.type} component={Navigation} />
      <Tab.Screen name={NAV_INFO.User.type} component={Navigation} />
    </Tab.Navigator>
    {children}
  </styles.StyledNavBar>
);

export default NavBar;
