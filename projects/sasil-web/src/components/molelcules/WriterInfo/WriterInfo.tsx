import { useRouter } from 'next/router';

import {
  COLORS,
  TextStyleName,
  TEXT_STYLE_NAME,
  WriterType,
  DELETED_USER_NICKNAME,
} from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import ProfileImage from '@/components/atoms/ProfileImage';
import StyledText from '@/components/atoms/StyledText';
import { useCallback } from 'react';
import * as styles from './WriterInfo.style';

const formatDate = (date: string) => {
  const dateData = new Date(date);

  const setTwoDigit = (time: string | number) => `0${time}`.slice(-2);
  const month = setTwoDigit(dateData.getMonth() + 1);
  const day = setTwoDigit(dateData.getDate());
  const hour = setTwoDigit(dateData.getHours());
  const min = setTwoDigit(dateData.getMinutes());
  return `${month}/${day} ${hour}:${min}`;
};

export interface WriterInfoProps {
  /** 작성자 정보 객체 */
  writerObj?: WriterType;
  /** 닉네임 텍스트 스타일(`TEXT_STYLE_NAME.*`) */
  textStyleName: TextStyleName;
  /** 닉네임 텍스트 색상 */
  textColor: string;
  /** 프로필 이미지 사이즈. 이미지 들어가는 원의 width */
  profileSize: number;
  /** 게시물 작성 시간  */
  writeDate?: string;
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
}: WriterInfoProps) => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(`${URL_INFO.user}/${writerObj?.id}`);
  }, [router, writerObj?.id]);

  return (
    <styles.WriterWrap onClick={onClick}>
      <ProfileImage src={writerObj?.profileImg} size={profileSize} />
      <StyledText
        color={textColor}
        textStyleName={textStyleName}
        className="writer-info"
      >
        {writerObj?.nickname ?? DELETED_USER_NICKNAME}
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
};

export default WriterInfo;
