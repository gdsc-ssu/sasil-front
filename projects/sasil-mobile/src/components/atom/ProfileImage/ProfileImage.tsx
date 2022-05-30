import React from 'react';
import * as styles from './ProfileImage.style';

export interface ProfileImageProps {
  /** 프로필 이미지 url. 없다면 null */
  src?: string | null;
  /** 이미지 사이즈 */
  size: number;
}

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 */
const ProfileImage = ({ src, size }: ProfileImageProps) => {
  // TODO: Default Image Src (mayble Logo..?)
  const imageSrc =
    src ??
    'https://image.shutterstock.com/image-photo/darkeyed-girl-pink-makeup-chewing-600w-1457328599.jpg';

  return <styles.profileWrap size={size} source={{ uri: imageSrc }} />;
};

export default ProfileImage;
