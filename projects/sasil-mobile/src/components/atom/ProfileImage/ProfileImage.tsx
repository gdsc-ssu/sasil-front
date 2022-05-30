import React from 'react';
import * as styles from './ProfileImage.style';

export interface ProfileImageProps {
  /** 프로필 이미지 url. 없다면 null */
  imageSrc: string | null;
  /** 이미지 사이즈 */
  size: number;
}

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 */
const ProfileImage = ({ imageSrc, size }: ProfileImageProps) =>
  imageSrc ? (
    <styles.profileWrap
      size={size}
      source={{ uri: imageSrc, width: size, height: size }}
    />
  ) : (
    <styles.defaultWrap size={size} />
  );

export default ProfileImage;
