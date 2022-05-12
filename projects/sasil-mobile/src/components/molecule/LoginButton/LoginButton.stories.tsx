import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  AppleLoginButton,
  GoogleLoginButton,
  KakaoLoginButton,
} from './social';

storiesOf('molecule/LoginButton', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Kakao', () => <KakaoLoginButton />)
  .add('Google', () => <GoogleLoginButton />)
  .add('Apple', () => <AppleLoginButton />);
