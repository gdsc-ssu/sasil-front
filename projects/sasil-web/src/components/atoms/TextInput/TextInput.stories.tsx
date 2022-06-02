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
  value,
  textStyleName,
  onTextChange,
}: TextInputProps) => (
  <TextInput
    placeholder={placeholder}
    className={className}
    value={value}
    textStyleName={textStyleName}
    onTextChange={onTextChange}
  />
);

export const Default = Template.bind({});
Default.args = {
  value: '입력된 값',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: '태그를 입력해주세요',
};
