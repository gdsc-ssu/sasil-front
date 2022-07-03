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
          type: 'main',
          name: NAV_INFO.main.name_kr,
          isFocused: true,
          onPress: action('onPressMain'),
        },
        {
          type: 'request',
          name: NAV_INFO.request.name_kr,
          isFocused: false,
          onPress: action('onPressRequest'),
        },
        {
          type: 'experiment',
          name: NAV_INFO.experiment.name_kr,
          isFocused: false,
          onPress: action('onPressExperiment'),
        },
        {
          type: 'user',
          name: NAV_INFO.user.name_kr,
          isFocused: false,
          onPress: action('onPressUser'),
        },
      ]}
    />
  ));
