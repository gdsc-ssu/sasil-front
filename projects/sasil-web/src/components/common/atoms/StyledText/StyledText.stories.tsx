import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import COLORS from '@sasil/common/dist/constants/style';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import StyledText, { StyledTextProps } from './StyledText';

export default {
  title: 'components/common/atom/StyledText',
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
