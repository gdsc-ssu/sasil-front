import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';
import WriterInfo from '@/components/molelcules/WriterInfo';
import Interest from '@/components/molelcules/Interest';
import * as styles from './PostInfoCard.style';

export interface PostInfoCardProps {
  post: any;
}

/** 게시물 상세 페이지의 사이드에 띄워지는 PostSummary 컴포넌트 내부에서 게시물 관련 내용을 보여주는 컴포넌트 (웹만 해당) */
const PostInfoCard = ({ post }: PostInfoCardProps) => (
  <styles.Wrap>
    <styles.CreateInfoWrap>
      <WriterInfo
        writerObj={post.user}
        textColor={COLORS.grayscale.gray7}
        textStyleName={TEXT_STYLE_NAME.body2R}
        profileSize={24}
        writeDate={post.createdAt}
      />
    </styles.CreateInfoWrap>

    <StyledText
      textStyleName={TEXT_STYLE_NAME.subtitle3}
      color={COLORS.grayscale.black}
      className="title-text"
    >
      {post.title}
    </StyledText>

    <styles.InterestsWrap>
      <Interest
        type="like"
        count={post.likeCount}
        size={16}
        textStyleName={TEXT_STYLE_NAME.body3}
        className="like-count"
      />
      <Interest
        type="bookmark"
        count={post.bookmarkCount}
        size={16}
        textStyleName={TEXT_STYLE_NAME.body3}
      />
    </styles.InterestsWrap>
  </styles.Wrap>
);

export default PostInfoCard;
