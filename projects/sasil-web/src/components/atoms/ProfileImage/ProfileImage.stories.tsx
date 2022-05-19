import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileImage, { ProfileImageProps } from '.';

export default {
  title: 'components/common/atom/ProfileImage',
  component: ProfileImage,
} as ComponentMeta<typeof ProfileImage>;

const Template: ComponentStory<typeof ProfileImage> = ({
  imageSrc,
  use,
}: ProfileImageProps) => <ProfileImage imageSrc={imageSrc} use={use} />;

// imageSrc에 null이 담겨 있어서 이미지가 담기지 않은 케이스
export const noImage = Template.bind({});
noImage.args = {
  imageSrc: null,
  use: 'post-card',
};

// imageSrc에 url이 담겨 있어서 이미지가 정상적으로 담겨있는 케이스
export const Image = Template.bind({});
Image.args = {
  imageSrc:
    'https://image.shutterstock.com/image-photo/darkeyed-girl-pink-makeup-chewing-600w-1457328599.jpg',
  use: 'post-card',
};
