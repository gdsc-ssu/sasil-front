import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import ProfileImage from '.';

storiesOf('ProfileImage', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Image', () => (
    <ProfileImage
      src="https://images.pexels.com/photos/9485465/pexels-photo-9485465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      size={24}
    />
  ))
  .add('No Image', () => <ProfileImage src={null} size={24} />);
