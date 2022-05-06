import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import LoginButton from './LoginButton';

storiesOf('molecule/LoginButton', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Kakao', () => <LoginButton social="kakao" />)
  .add('Google', () => <LoginButton social="google" />)
  .add('Apple', () => <LoginButton social="apple" />);
