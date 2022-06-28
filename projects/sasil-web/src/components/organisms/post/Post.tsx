import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import Like from '@/components/molelcules/Like/Like';
import StyledText from '@/components/atoms/StyledText';
import WriterInfo from '@/components/molelcules/WriterInfo';
import PostHeader, { PostHeaderProps } from './PostHeader';
import * as styles from './Post.style';

// 게시물 타입(실험 or 의뢰)
const POST_TYPE = {
  experiment: 'experiment',
  request: 'request',
} as const;
type PostType = typeof POST_TYPE[keyof typeof POST_TYPE];

type themeProps = {
  [key in PostType]: {
    likeColor: string;
    textColor: string;
    backgroundColor: string;
  };
};

// 게시물 타입이 의뢰인지, 실험인지에 따라 게시물 카드 스타일이 달라진다.
const theme: themeProps = {
  experiment: {
    likeColor: COLORS.grayscale.white,
    textColor: COLORS.grayscale.white,
    backgroundColor: COLORS.primary.alpha50,
  },
  request: {
    likeColor: COLORS.primary.normal,
    textColor: COLORS.grayscale.black,
    backgroundColor: COLORS.grayscale.white,
  },
};

// TODO writeObj type확정 되면 수정해줄 것!
export interface MiniCardProps {
  /** `experiment` or `request` */
  type: 'experiment' | 'request';
  /** 게시물 제목 */
  title: string;
  /** 게시물 좋아요 수 */
  likeCount: number;
  /** [실험만 필요] 게시물 작성자 정보(닉네임,프로필 사진)를 담은 객체 */
  writerObj?: any;
  /** [실험만 필요] 게시물의 대표 이미지. 이미지 없을시 배경색 `gray5` */
  thumbnail?: string | null;
  className?: string;
}

export interface CardProps extends PostHeaderProps {
  /** 게시물 제목 */
  title: string;
  /** 게시물 좋아요 수 */
  likeCount: number;
}

/**
 * 메인 페이지 내 실험 컨텐츠가 담겨있는 게시물 컴포넌트
 */
export const MiniCard = ({
  type,
  title,
  likeCount,
  writerObj = null,
  thumbnail = null,
  className,
}: MiniCardProps) => (
  <styles.MiniCard
    backgroundColor={theme[type].backgroundColor}
    thumbnail={type === 'experiment' ? thumbnail : null}
    className={className}
  >
    <styles.InfoWrap>
      {writerObj && (
        <styles.WriterWrap>
          <WriterInfo
            textColor={theme[type].textColor}
            textStyleName={TEXT_STYLE_NAME.body3}
            profileSize={14}
            writerObj={writerObj}
          />
        </styles.WriterWrap>
      )}
      <StyledText
        color={theme[type].textColor}
        textStyleName={TEXT_STYLE_NAME.body2R}
        className="post-title"
      >
        {title}
      </StyledText>
    </styles.InfoWrap>
    <Like color={theme[type].likeColor} likeCount={likeCount} />
  </styles.MiniCard>
);

/**
 * 의뢰 및 실험 페이지에서 사용되는 Card 컴포넌트
 */
export const Card = ({
  title,
  likeCount,
  thumbnail,
  categories,
}: CardProps) => (
  <styles.PostCardWrapper>
    <PostHeader categories={categories} thumbnail={thumbnail} />
    <styles.PostCardContent>
      <StyledText
        color={COLORS.grayscale.black}
        textStyleName={TEXT_STYLE_NAME.subtitle2B}
        className="post-title"
      >
        {title}
      </StyledText>
      <Like color={COLORS.primary.normal} likeCount={likeCount} />
    </styles.PostCardContent>
  </styles.PostCardWrapper>
);
