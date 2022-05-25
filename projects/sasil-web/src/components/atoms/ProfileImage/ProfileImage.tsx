import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export interface ProfileImageProps {
  /** 프로필 이미지 url. 사용자가 프로필 이미지를 가지고 있지 않다면 null */
  imageSrc?: string | null;
  /** 이미지가 들어가는 원의 width */
  size: number;
}

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 */
const ProfileImage = styled.div((props: ProfileImageProps) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size / 2,
  background: props.imageSrc
    ? `url(${props.imageSrc})`
    : COLORS.grayscale.gray6,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
}));

export default ProfileImage;
