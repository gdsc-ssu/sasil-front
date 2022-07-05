import StyledText from '@/components/atoms/StyledText';
import Interest from '@/components/molelcules/Interest';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import React from 'react';
import * as styles from './InterestsWrap.style';

export interface InterestsWrapProps {
  /** 좋아요 수 */
  likeCount: number;
  /** 북마크 수 */
  bookmarkCount: number;
  /** 사용자가 해당 게시물에 좋아요를 눌렀는지에 대한 여부 */
  isLike?: boolean;
  /** 사용자가 해당 게시물에 북마크를 눌렀는지에 대한 여부 */
  isBookmark?: boolean;
  /** 좋아요 혹은 북마크 버튼을 눌렀을 때 실행되는 함수 */
  onInterestPress?: (buttonName: string) => void;
}

/** 사용자가 게시물에 좋아요와 북마크를 누를 수 있는 컴포넌트 */
const InterestsWrap = ({
  likeCount,
  bookmarkCount,
  isLike = true,
  isBookmark = true,
  onInterestPress,
}: InterestsWrapProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onInterestPress?.(e.currentTarget.name);
  };

  return (
    <styles.InterestsWrap>
      <styles.InterestButton name="like" onClick={onClick}>
        <styles.WebTitle>
          <StyledText
            color={COLORS.grayscale.black}
            textStyleName={TEXT_STYLE_NAME.body1R}
          >
            관심있어요!
          </StyledText>
        </styles.WebTitle>

        <Interest
          type="like"
          count={likeCount}
          pressed={isLike}
          size={25}
          textStyleName={TEXT_STYLE_NAME.body1R}
          className="like-count"
        />
      </styles.InterestButton>

      <styles.InterestButton name="bookmark" onClick={onClick}>
        <styles.WebTitle>
          <StyledText
            color={COLORS.grayscale.black}
            textStyleName={TEXT_STYLE_NAME.body1R}
          >
            궁금해요!
          </StyledText>
        </styles.WebTitle>

        <Interest
          type="bookmark"
          count={bookmarkCount}
          pressed={isBookmark}
          size={25}
          textStyleName={TEXT_STYLE_NAME.body1R}
        />
      </styles.InterestButton>
    </styles.InterestsWrap>
  );
};

export default InterestsWrap;
