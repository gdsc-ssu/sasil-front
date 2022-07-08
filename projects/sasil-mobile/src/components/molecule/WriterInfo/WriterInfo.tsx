import ProfileImage from '@/components/atom/ProfileImage';
import StyledText from '@/components/atom/StyledText';
import { TextStyleName } from '@sasil/common';
import * as styles from './WriterInfo.style';

// TODO writerObj type 추후 지정
export interface WriterInfoProps {
  /** 작성자 정보 객체 */
  writerObj: any;
  /** 닉네임 텍스트 스타일(`TEXT_STYLE_NAME.*`) */
  textStyleName: TextStyleName;
  /** 닉네임 텍스트 색상 */
  textColor: string;
  /** 프로필 이미지 사이즈. 이미지 들어가는 원의 width */
  profileSize: number;
}

/**
 * 게시물 작성자 정보(닉네임, 프로필 사진)를 나타낼 때 사용되는 컴포넌트.
 */
const WriterInfo = ({
  writerObj,
  textStyleName,
  textColor,
  profileSize,
}: WriterInfoProps) => (
  <styles.Wrap>
    <ProfileImage src={writerObj.profileImg} size={profileSize} />
    <styles.TextWrap>
      <StyledText color={textColor} textStyleName={textStyleName}>
        {writerObj.nickname}
      </StyledText>
    </styles.TextWrap>
  </styles.Wrap>
);

export default WriterInfo;
