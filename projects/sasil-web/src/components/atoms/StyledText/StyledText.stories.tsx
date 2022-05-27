import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import StyledText from './StyledText';
import { StyledTextProps } from './StyledText.style';

// storybook에서 color와 textStyle을 옵션으로 선택해서 테스트 가능
export default {
  title: 'components/atom/StyledText',
  component: StyledText,
  argTypes: {
    color: {
      options: COLORS.primary,
      control: 'select',
    },
    textStyleName: {
      options: TEXT_STYLE_NAME,
      control: 'select',
    },
  },
} as ComponentMeta<typeof StyledText>;

const Template: ComponentStory<typeof StyledText> = ({
  color,
  textStyleName,
}: StyledTextProps) => (
  <StyledText color={color} textStyleName={textStyleName}>
    Styled Text
  </StyledText>
);

export const Default = Template.bind({});
Default.args = {
  color: '#000',
  textStyleName: TEXT_STYLE_NAME.title,
};
