import Image from 'next/image';
import ProfileImageWrap from './ProfileImage.style';

export interface ProfileImageProps {
  imageSrc: string | null;
  size: number;
}

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 * @param imageSrc : 프로필 이미지 url. 사용자가 프로필 이미지를 가지고 있지 않다면 null
 * @param size : 이미지가 들어가는 원의 width
 */
const ProfileImage = ({ imageSrc, size }: ProfileImageProps) => (
  <ProfileImageWrap size={size}>
    {imageSrc && <Image src={imageSrc} layout="fill" />}
  </ProfileImageWrap>
);

export default ProfileImage;
