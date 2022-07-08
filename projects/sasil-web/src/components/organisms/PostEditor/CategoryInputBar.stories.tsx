import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { categories as sampleCategories } from 'src/dummyData';
import CategoryInputBar, { CategoryInputBarProps } from './CategoryInputBar';

export default {
  title: 'components/organism/PostEditor/CategoryInputBar',
  component: CategoryInputBar,
} as ComponentMeta<typeof CategoryInputBar>;

const Template: ComponentStory<typeof CategoryInputBar> = ({
  cgInputList,
  cgValue,
}: CategoryInputBarProps) => (
  <CategoryInputBar cgInputList={cgInputList} cgValue={cgValue} />
);

export const EmptyBar = Template.bind({});
EmptyBar.args = {
  cgInputList: [],
  cgValue: '',
};

export const CategoriesBar = Template.bind({});
CategoriesBar.args = {
  cgInputList: ['카테고리1', '카테고리2'],
  cgValue: '',
};
