import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { NAV_INFO } from '@sasil/common';
import NavItem from './NavItem';

storiesOf('NavItem', module)
  .add('Main', () => (
    <NavItem
      type={NAV_INFO.Main.type}
      name={NAV_INFO.Main.name}
      isFocused={false}
    />
  ))
  .add('Request', () => (
    <NavItem
      type={NAV_INFO.Request.type}
      name={NAV_INFO.Request.name}
      isFocused={false}
    />
  ))
  .add('Experiment', () => (
    <NavItem
      type={NAV_INFO.Experiment.type}
      name={NAV_INFO.Experiment.name}
      isFocused={false}
    />
  ))
  .add('User', () => (
    <NavItem
      type={NAV_INFO.User.type}
      name={NAV_INFO.User.name}
      isFocused={false}
    />
  ));
