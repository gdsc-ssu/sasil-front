import ProfileImage from '@/components/atoms/ProfileImage';
import StyledText from '@/components/atoms/StyledText';
import { TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './WriterInfo.style';

export interface WriterInfoProps {
  textColor: string;
  writerObj: any;
  use: 'post-card' | 'post-detail';
}

const textStyle = {
  'post-card': TEXT_STYLE_NAME.body3,
  'post-detail': TEXT_STYLE_NAME.body2R,
};

/**
 * 게시물 작성자 정보(닉네임, 프로필 사진)를 나타낼 때 사용되는 컴포넌트.
 * @param writerObj 작성자 정보 객체
 * @param textColor 닉네임 텍스트 색상
 * @param use `post-card`와 `post-detail` 중 하나로, 이 컴포넌트가 사용되는 위치
 */
const WriterInfo = ({ writerObj, textColor, use }: WriterInfoProps) => (
  <styles.WriterWrap>
    <ProfileImage imageSrc={writerObj.profileImg} use={use} />
    <styles.TextWrap>
      <StyledText color={textColor} textStyleName={textStyle[use]}>
        {writerObj.nickname}
      </StyledText>
    </styles.TextWrap>
  </styles.WriterWrap>
);

export default WriterInfo;
