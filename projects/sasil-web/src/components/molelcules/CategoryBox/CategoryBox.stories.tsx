import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategoryBox, { CategoryBoxProps } from '.';

export default {
  title: 'components/molecule/CategoryBox',
  component: CategoryBox,
} as ComponentMeta<typeof CategoryBox>;

const Template: ComponentStory<typeof CategoryBox> = ({
  name,
  isWithBackground,
}: CategoryBoxProps) => (
  <CategoryBox name={name} isWithBackground={isWithBackground} />
);

export const Default = Template.bind({});
Default.args = {
  name: '음식',
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  name: '음식',
  isWithBackground: true,
};
