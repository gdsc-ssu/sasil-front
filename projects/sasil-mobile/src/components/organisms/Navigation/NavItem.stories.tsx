import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { NAV_INFO } from '@sasil/common';
import NavItem from './NavItem';

storiesOf('NavItem', module)
  .add('Main', () => (
    <NavItem type="main" name={NAV_INFO.main.name_kr} isFocused={false} />
  ))
  .add('Request', () => (
    <NavItem type="request" name={NAV_INFO.request.name_kr} isFocused={false} />
  ))
  .add('Experiment', () => (
    <NavItem
      type="experiment"
      name={NAV_INFO.experiment.name_kr}
      isFocused={false}
    />
  ))
  .add('User', () => (
    <NavItem type="user" name={NAV_INFO.user.name_kr} isFocused={false} />
  ));
