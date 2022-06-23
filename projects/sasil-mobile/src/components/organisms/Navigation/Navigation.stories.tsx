import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { NAV_INFO } from '@sasil/common';
import Navigation from './Navigation';

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Navigation
      navListInfo={[
        {
          type: NAV_INFO.Main.type,
          name: NAV_INFO.Main.name,
          isFocused: true,
          onPress: action('onPressMain'),
        },
        {
          type: NAV_INFO.Request.type,
          name: NAV_INFO.Request.name,
          isFocused: false,
          onPress: action('onPressRequest'),
        },
        {
          type: NAV_INFO.Experiment.type,
          name: NAV_INFO.Experiment.name,
          isFocused: false,
          onPress: action('onPressExperiment'),
        },
        {
          type: NAV_INFO.User.type,
          name: NAV_INFO.User.name,
          isFocused: false,
          onPress: action('onPressUser'),
        },
      ]}
    />
  ));
