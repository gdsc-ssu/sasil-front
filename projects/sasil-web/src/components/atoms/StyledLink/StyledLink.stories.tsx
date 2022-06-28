import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import StyledLink, { StyledLinkProps } from '.';

export default {
  title: 'components/atom/StyledLink',
  component: StyledLink,
} as ComponentMeta<typeof StyledLink>;

const Template: ComponentStory<typeof StyledLink> = ({
  url,
  color,
  textStyleName,
  ellipsis,
}: StyledLinkProps) => (
  <StyledLink
    url={url}
    color={color}
    textStyleName={textStyleName}
    ellipsis={ellipsis}
  >
    Styled Link
  </StyledLink>
);

export const Default = Template.bind({});
Default.args = {
  url: '',
  color: COLORS.grayscale.black,
  textStyleName: TEXT_STYLE_NAME.title,
};
