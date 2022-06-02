import ProfileImage from '@/components/atoms/ProfileImage';
import StyledText from '@/components/atoms/StyledText';
import { TextStyleName } from '@sasil/common';
import * as styles from './WriterInfo.style';

// TODO writeObj type 확정 되면 수정해줄 것!
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
 * 게시물 작성자 정보(닉네임, 프로필 사진)를 나타내는 컴포넌트
 */
const WriterInfo = ({
  writerObj,
  textStyleName,
  textColor,
  profileSize,
}: WriterInfoProps) => (
  <styles.writerWrap>
    <ProfileImage src={writerObj.profileImg} size={profileSize} />
    <StyledText
      color={textColor}
      textStyleName={textStyleName}
      className="writer-info"
    >
      {writerObj.nickname}
    </StyledText>
  </styles.writerWrap>
);

export default WriterInfo;
