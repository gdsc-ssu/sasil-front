import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';
import Image from 'next/image';

interface ProfileImageWrapProps {
  size: number;
}

// ProfileImage 전체를 감싸는 div
const ProfileImageWrap = styled.div((props: ProfileImageWrapProps) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size / 2,
  backgroundColor: COLORS.grayscale.gray6,
  overflow: 'hidden',
  position: 'relative',
}));

export interface ProfileImageProps {
  imageSrc: string | undefined;
  size: number;
}

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 * @param imageSrc : 프로필 이미지 url. 사용자가 프로필 이미지를 가지고 있지 않다면 undefined
 * @param size : 이미지가 들어가는 원의 width
 */
const ProfileImage = ({ imageSrc, size }: ProfileImageProps) => (
  <ProfileImageWrap size={size}>
    {imageSrc && <Image src={imageSrc} layout="fill" />}
  </ProfileImageWrap>
);

export default ProfileImage;
