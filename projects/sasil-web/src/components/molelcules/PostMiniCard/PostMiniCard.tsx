import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import Like from '@/components/atoms/Like/Like';
import StyledText from '@/components/atoms/StyledText';
import WriterInfo from '@/components/molelcules/WriterInfo';
import * as styles from './PostMiniCard.style';

// 게시물 타입
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
    backgroundColor: COLORS.grayscale.gray5,
  },
  request: {
    likeColor: COLORS.primary.normal,
    textColor: COLORS.grayscale.black,
    backgroundColor: COLORS.grayscale.white,
  },
};

export interface PostMiniCardProps {
  type: 'experiment' | 'request';
  title: string;
  likeCount: number;
  writerObj?: any;
  thumbnail?: string | null;
}

/**
 * 메인 페이지 내 실험 컨텐츠가 담겨있는 게시물 컴포넌트
 * @param type `experiment`, `request`
 * @param title 게시물 제목
 * @param likeCount 게시물 좋아요 수
 * @param writerObj [실험만 필요] 게시물 작성자 정보(닉네임,프로필 사진)를 담은 객체
 * @param thumbnail [실험만 필요] 게시물의 대표 이미지. 이미지 없을시 배경색 `gray5`
 */
const PostMiniCard = ({
  type,
  title,
  likeCount,
  writerObj,
  thumbnail,
}: PostMiniCardProps) => (
  <styles.postWrap
    backgroundColor={theme[type].backgroundColor}
    thumbnail={thumbnail}
  >
    <styles.infoWrap>
      {type === 'experiment' && (
        <styles.writerWrap>
          <WriterInfo
            textColor={theme[type].textColor}
            writerObj={writerObj}
            use="post-card"
          />
        </styles.writerWrap>
      )}
      <StyledText
        color={theme[type].textColor}
        textStyleName={TEXT_STYLE_NAME.body2R}
      >
        {title.length > 28 ? `${title.substring(0, 28)}...` : title}
      </StyledText>
    </styles.infoWrap>
    <Like color={theme[type].likeColor} likeCount={likeCount} />
  </styles.postWrap>
);
export default PostMiniCard;
