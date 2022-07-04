import ProfileImage from '@/components/atoms/ProfileImage';
import StyledText from '@/components/atoms/StyledText';
import { COLORS, TextStyleName, TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './WriterInfo.style';

const formatDate = (date: Date) => {
  const setTwoDigit = (time: string | number) => `0${time}`.slice(-2);
  const month = setTwoDigit(date.getMonth() + 1);
  const day = setTwoDigit(date.getDate());
  const hour = setTwoDigit(date.getHours());
  const min = setTwoDigit(date.getMinutes());
  return `${month}/${day} ${hour}:${min}`;
};

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
  /** 게시물 작성 시간  */
  writeDate?: Date;
}

/**
 * 게시물 작성자 정보를 나타내는 컴포넌트
 */
const WriterInfo = ({
  writerObj,
  textStyleName,
  textColor,
  profileSize,
  writeDate,
}: WriterInfoProps) => (
  <styles.WriterWrap>
    <ProfileImage src={writerObj.profileImg} size={profileSize} />
    <StyledText
      color={textColor}
      textStyleName={textStyleName}
      className="writer-info"
    >
      {writerObj.nickname}
    </StyledText>
    {writeDate && (
      <StyledText
        color={COLORS.grayscale.gray5}
        textStyleName={TEXT_STYLE_NAME.body3}
        className="create-date"
      >
        {formatDate(writeDate)}
      </StyledText>
    )}
  </styles.WriterWrap>
);

export default WriterInfo;
