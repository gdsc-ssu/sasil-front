import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import COLORS, { TEXT_STYLE_NAME } from '@sasil/common';
import StyledText from './StyledText';

storiesOf('common/atom/StyledText', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Default', () => (
    <StyledText
      color={COLORS.primary.normal}
      textStyleName={TEXT_STYLE_NAME.title}
    >
      Styled Text
    </StyledText>
  ));
