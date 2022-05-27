import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileImage from '.';
import { ProfileImageProps } from './ProfileImage.style';

export default {
  title: 'components/atom/ProfileImage',
  component: ProfileImage,
} as ComponentMeta<typeof ProfileImage>;

const Template: ComponentStory<typeof ProfileImage> = ({
  imageSrc,
  size,
}: ProfileImageProps) => <ProfileImage imageSrc={imageSrc} size={size} />;

export const Empty = Template.bind({});
Empty.args = {
  size: 16,
};

export const Image = Template.bind({});
Image.args = {
  imageSrc:
    'https://image.shutterstock.com/image-photo/darkeyed-girl-pink-makeup-chewing-600w-1457328599.jpg',
  size: 24,
};
