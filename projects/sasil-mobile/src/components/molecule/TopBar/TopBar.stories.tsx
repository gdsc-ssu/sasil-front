import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import TopBar from '.';

storiesOf('TopBar', module).add('Default', () => (
  <TopBar onBackPress={action('onBackPress')} />
));
