import * as styles from './ProfileImage.style';
import { ProfileImageProps } from './ProfileImage.style';

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 */
const ProfileImage = ({ imageSrc, size, className }: ProfileImageProps) => (
  <styles.styledProfileImage
    imageSrc={imageSrc}
    size={size}
    className={className}
  />
);

export default ProfileImage;
