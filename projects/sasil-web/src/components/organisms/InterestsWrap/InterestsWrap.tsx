import StyledText from '@/components/atoms/StyledText';
import Interest from '@/components/molelcules/Interest';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import React from 'react';
import * as styles from './InterestsWrap.style';

export interface LikeInfoType {
  isLike: boolean;
  likeCount: number;
}

export interface BookmarkInfoType {
  isBookmark: boolean;
  bookmarkCount: number;
}

export interface InterestsWrapProps {
  likeInfo: LikeInfoType;
  bookmarkInfo: BookmarkInfoType;
  /** 좋아요 혹은 북마크 버튼을 눌렀을 때 실행되는 함수 */
  handleLike?: () => void;
  handleBookmark?: () => void;
}

/** 사용자가 게시물에 좋아요와 북마크를 누를 수 있는 컴포넌트 */
const InterestsWrap = ({
  likeInfo,
  bookmarkInfo,
  handleLike,
  handleBookmark,
}: InterestsWrapProps) => (
  <styles.InterestsWrap>
    <styles.InterestButton name="like" onClick={handleLike}>
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
        count={likeInfo.likeCount}
        pressed={likeInfo.isLike}
        size={25}
        textStyleName={TEXT_STYLE_NAME.body1R}
        className="like-count"
      />
    </styles.InterestButton>

    <styles.InterestButton name="bookmark" onClick={handleBookmark}>
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
        count={bookmarkInfo.bookmarkCount}
        pressed={bookmarkInfo.isBookmark}
        size={25}
        textStyleName={TEXT_STYLE_NAME.body1R}
      />
    </styles.InterestButton>
  </styles.InterestsWrap>
);

export default InterestsWrap;
