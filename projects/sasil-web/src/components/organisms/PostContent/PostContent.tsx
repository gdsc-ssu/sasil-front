import PostDetailIcon from '@/assets/icons/PostDetail.svg';
import StyledText from '@/components/atoms/StyledText';
import CategoryBox from '@/components/molelcules/CategoryBox';
import WriterInfo from '@/components/molelcules/WriterInfo';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import { Viewer } from '@toast-ui/react-editor';
import * as styles from './PostContent.style';

export interface PostContentProps {
  post: any;
}

/** 게시물 상세 페이지에서 게시물 제목, 카테고리, 내용을 보여주는 컴포넌트 (모바일에서는 게시물 작성자 정보 포함) */
const PostContent = ({ post }: PostContentProps) => (
  <styles.ContentWrap>
    <styles.IconWrap>
      <PostDetailIcon />
    </styles.IconWrap>
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
      textStyleName={TEXT_STYLE_NAME.title}
      color={COLORS.grayscale.black}
      className="title-text"
    >
      {post.title}
    </StyledText>
    <styles.CategoriesWrap>
      {post.categories.map((category: any) => (
        <CategoryBox
          key={category.id}
          name={category.name}
          isWithBackground={false}
        />
      ))}
    </styles.CategoriesWrap>
    <Viewer initialValue={post.content} />
  </styles.ContentWrap>
);

export default PostContent;
