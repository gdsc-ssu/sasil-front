import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { NavItemKey, NAV_INFO } from '@sasil/common';
import Navigation from '@/components/organisms/Navigation';
import * as styles from './NavBar.style';

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
  <styles.StyledNavBar>
    <Tab.Navigator
      initialRouteName={NAV_INFO.main.name}
      tabBar={NavWrapper}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={NAV_INFO.main.name} component={Navigation} />
      <Tab.Screen name={NAV_INFO.request.name} component={Navigation} />
      <Tab.Screen name={NAV_INFO.experiment.name} component={Navigation} />
      <Tab.Screen name={NAV_INFO.user.name} component={Navigation} />
    </Tab.Navigator>
    {children}
  </styles.StyledNavBar>
);

export default NavBar;
