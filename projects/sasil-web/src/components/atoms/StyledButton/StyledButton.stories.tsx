import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TEXT_STYLE_NAME } from '@sasil/common';
import StyledButton, { StyledButtonProps } from '.';

export default {
  title: 'components/atom/StyledButton',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = ({
  text,
  fontColor,
  backgroundColor,
  isMini,
  textStyleName,
}: StyledButtonProps) => (
  <StyledButton
    text={text}
    fontColor={fontColor}
    backgroundColor={backgroundColor}
    textStyleName={textStyleName}
    isMini={isMini}
  />
);

export const Default = Template.bind({});
Default.args = {
  text: '실험하기',
  textStyleName: TEXT_STYLE_NAME.button2B,
};

export const MiniButton = Template.bind({});
MiniButton.args = {
  text: '실험하기',
  textStyleName: TEXT_STYLE_NAME.button2B,
  isMini: true,
};
