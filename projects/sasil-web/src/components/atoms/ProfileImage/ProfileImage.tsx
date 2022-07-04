import * as styles from './ProfileImage.style';

export interface ProfileImageProps {
  /** 프로필 이미지 url. 사용자가 프로필 이미지를 가지고 있지 않다면 null */
  src?: string | null;
  /** 이미지가 들어가는 원의 width */
  size: number;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 사용자의 프로필 이미지를 나타내는 컴포넌트
 */
const ProfileImage = ({ src, size, className }: ProfileImageProps) => {
  // TODO: Default Image Src (mayble Logo..?)
  const imageSrc =
    src ??
    'https:image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1114445501.jpg';

  return (
    <styles.StyledProfileImage
      src={imageSrc}
      size={size}
      className={className}
    />
  );
};

export default ProfileImage;
