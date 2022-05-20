import ProfileImage from '@/components/atoms/ProfileImage';
import StyledText from '@/components/atoms/StyledText';
import { TextStyleName } from '@sasil/common';
import * as styles from './WriterInfo.style';

export interface WriterInfoProps {
  writerObj: any;
  textStyleName: TextStyleName;
  textColor: string;
  profileSize: number;
}

/**
 * 게시물 작성자 정보(닉네임, 프로필 사진)를 나타내는 컴포넌트
 * @param writerObj 작성자 정보 객체
 * @param textSize 닉네임 텍스트 크기
 * @param textColor 닉네임 텍스트 색상
 * @param profileSize 프로필 이미지 사이즈. 이미지가 들어가는 원의 width
 */
const WriterInfo = ({
  writerObj,
  textStyleName,
  textColor,
  profileSize,
}: WriterInfoProps) => (
  <styles.writerWrap>
    <ProfileImage imageSrc={writerObj.profileImg} size={profileSize} />
    <styles.textWrap>
      <StyledText color={textColor} textStyleName={textStyleName}>
        {writerObj.nickname}
      </StyledText>
    </styles.textWrap>
  </styles.writerWrap>
);

export default WriterInfo;
