import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import StyledButton from '.';

storiesOf('StyledButton', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Default', () => (
    <StyledButton
      text="Styled Button"
      textStyleName={TEXT_STYLE_NAME.button2B}
    />
  ))
  .add('WithColor', () => (
    <StyledButton
      text="Styled Button"
      fontColor={COLORS.primary.normal}
      backgroundColor={COLORS.primary.alpha10}
      textStyleName={TEXT_STYLE_NAME.button2B}
    />
  ));
