import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput, { TextInputProps } from '.';

export default {
  title: 'components/atom/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({
  placeholder,
  className,
  onChange,
}: TextInputProps) => (
  <TextInput
    placeholder={placeholder}
    className={className}
    onChange={onChange}
  />
);

export const Basic = Template.bind({});

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: '태그를 입력해주세요',
};
