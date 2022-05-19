import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';
import Image from 'next/image';

interface ProfileWrapProps {
  size: number;
}

// Profile 전체를 감싸는 div
const ProfileWrap = styled.div((props: ProfileWrapProps) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size / 2,
  backgroundColor: COLORS.grayscale.gray6,
  overflow: 'hidden',
  position: 'relative',
}));

// 사용 위치에 따른 프로필 이미지의 크기
const profileSize = {
  'post-card': 16,
  'post-detail': 24,
};

export interface ProfileImageProps {
  imageSrc: string | null;
  use: 'post-card' | 'post-detail';
}

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 * @param imageSrc : 프로필 이미지 url. 없다면 null
 * @param use :`post-card`와 `post-detail` 중 하나로, 이 컴포넌트가 사용되는 위치.
 */
const ProfileImage = ({ imageSrc, use }: ProfileImageProps) => (
  <ProfileWrap size={profileSize[use]}>
    {imageSrc && <Image src={imageSrc} layout="fill" />}
  </ProfileWrap>
);

export default ProfileImage;
