import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import StyledText from './StyledText';

storiesOf('common/atom/StyledText', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Default', () => <StyledText color="red">Styled Text</StyledText>);
