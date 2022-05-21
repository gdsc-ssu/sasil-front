import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import Like from '@/components/atoms/Like/Like';
import StyledText from '@/components/atoms/StyledText';
import WriterInfo from '@/components/molelcules/WriterInfo';
import * as styles from './Post.style';

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

export interface MiniCardProps {
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
export const MiniCard = ({
  type,
  title,
  likeCount,
  writerObj = null,
  thumbnail = null,
}: MiniCardProps) => (
  <styles.miniCard
    backgroundColor={theme[type].backgroundColor}
    thumbnail={thumbnail}
  >
    <styles.infoWrap>
      {writerObj && (
        <styles.writerWrap>
          <WriterInfo
            textColor={theme[type].textColor}
            textStyleName={TEXT_STYLE_NAME.body3}
            profileSize={14}
            writerObj={writerObj}
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
  </styles.miniCard>
);

// TODO 의뢰 및 실험 페이지에서 사용되는 Post Card 컴포넌트
// TODO PostCard.stories.tsx 로 스토리 파일 별도로 생성할 것
export const Card = () => <div>Card</div>;
