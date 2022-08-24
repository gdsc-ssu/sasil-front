import { useEffect, useRef, LegacyRef, RefObject } from 'react';
import PostDetailIcon from '@/assets/icons/PostDetail.svg';
import MenuCircleIcon from '@/assets/icons/MenuCircle.svg';
import DeleteIcon from '@/assets/icons/Delete.svg';
import ReportIcon from '@/assets/icons/Danger.svg';
import EditIcon from '@/assets/icons/Edit.svg';
import StyledText from '@/components/atoms/StyledText';
import CategoryBox from '@/components/molelcules/CategoryBox';
import WriterInfo from '@/components/molelcules/WriterInfo';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import { Viewer } from '@toast-ui/react-editor';
import DropdownMenu from '@/components/molelcules/DropdownMenu';
import DropdownMenuItem from '@/components/molelcules/DropdownMenu/DropdownMenuItem';
import * as styles from './PostContent.style';

export interface PostContentProps {
  post: any;
  /** 게시글 메뉴 노출 정보 객체  */
  menuDisplayInfo: {
    display: boolean;
    top: number;
  };
  /** 게시글 메뉴 노출 컨트롤 함수 */
  onMenuDisplayToggle: (top?: number) => void;
  /** 게시물 작성자 여부 */
  isWriter: boolean;
}

/** 게시물 상세 페이지에서 게시물 제목, 카테고리, 내용을 보여주는 컴포넌트 (모바일에서는 게시물 작성자 정보 포함) */
const PostContent = ({
  post,
  menuDisplayInfo,
  onMenuDisplayToggle,
  isWriter,
}: PostContentProps) => {
  const viewerRef: LegacyRef<Viewer> = useRef<Viewer>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    viewerRef.current?.getInstance().setMarkdown(post.content);
  }, [post]);
  return (
    <styles.ContentWrap>
      <styles.IconWrap>
        <PostDetailIcon />
        <styles.MenuIconWrap
          onClick={() =>
            onMenuDisplayToggle?.((menuRef?.current?.offsetTop ?? 0) + 20)
          }
          ref={menuRef}
        >
          <MenuCircleIcon />
        </styles.MenuIconWrap>
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

      <Viewer ref={viewerRef} initialValue={post.content} />

      <DropdownMenu
        menuDisplayInfo={menuDisplayInfo}
        onMenuDisplayToggle={onMenuDisplayToggle}
        className="post-menu"
      >
        {isWriter && (
          <>
            <DropdownMenuItem
              icon={<EditIcon width={19} />}
              text="수정"
              onMenuClick={() => {}}
            />
            <DropdownMenuItem
              icon={<DeleteIcon width={19} />}
              text="삭제"
              onMenuClick={() => {}}
            />
          </>
        )}
        <DropdownMenuItem
          icon={<ReportIcon width={19} />}
          text="신고"
          onMenuClick={() => {}}
        />
      </DropdownMenu>
    </styles.ContentWrap>
  );
};
export default PostContent;
