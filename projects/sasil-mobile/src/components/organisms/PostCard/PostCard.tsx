import { Pressable } from 'react-native';
import Like from '@/components/molecule/Like';
import StyledText from '@/components/atom/StyledText';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import WriterInfo from '@/components/molecule/WriterInfo';
import * as styles from './PostCard.style';

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

export interface PostCardProps {
  /** `experiment`, `request` */
  type: 'experiment' | 'request';
  /** 게시물 제목 */
  title: string;
  /** 게시물 좋아요 수 */
  likeCount: number;
  /** [실험만 필요] 게시물 작성자 정보(닉네임,프로필 사진)를 담은 객체 */
  writerObj?: any;
  /** [실험만 필요] 게시물의 대표 이미지. 이미지 없을시 배경색 `gray5` */
  thumbnail?: string | null;
  /** 추가 style 적용을 위한 css 객체 */
  style?: any;
  onPress?: () => void;
}

/**
 * 실험 및 의뢰 게시물을 담을 컴포넌트
 */
const PostCard = ({
  type,
  title,
  likeCount,
  writerObj,
  thumbnail,
  style,
  onPress,
}: PostCardProps) => {
  const isExperiment = type === 'experiment';

  return (
    <Pressable onPress={onPress}>
      <styles.PostWrap
        source={{ uri: (isExperiment && thumbnail) || undefined }}
        resizeMode="cover"
        style={style}
      >
        {isExperiment && <styles.Filter />}
        <styles.InfoWrap>
          {isExperiment && (
            <styles.WriterWrap>
              <WriterInfo
                textColor={theme[type].textColor}
                writerObj={writerObj}
                profileSize={14}
                textStyleName={TEXT_STYLE_NAME.body3}
              />
            </styles.WriterWrap>
          )}
          <StyledText
            color={theme[type].textColor}
            textStyleName={TEXT_STYLE_NAME.body2R}
            numberOfLines={2}
          >
            {title}
          </StyledText>
        </styles.InfoWrap>
        <Like color={theme[type].likeColor} likeCount={likeCount} />
      </styles.PostWrap>
    </Pressable>
  );
};

export default PostCard;
