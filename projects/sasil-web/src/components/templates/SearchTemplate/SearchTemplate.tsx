import React from 'react';

import {
  COLORS,
  PostListType,
  TEXT_STYLE_NAME,
  PostType,
  SearchType,
} from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';
import NavBar from '@/components/templates/NavBar';
import PostsWrap from '@/components/templates/PostsWrap';
import SwitchButton from '@/components/molelcules/SwitchButton';
import PageHeader from './PageHeader';
import * as styles from './SearchTemplate.style';

export interface SearchTemplateProps {
  /** 검색할 단어 혹은 해시태그 */
  keyword?: string;
  /** 검색 타입 (키워드(query) or 태그) */
  searchType: SearchType;
  /** 검색 결과로 보여줄 게시물 타입 */
  postType: PostType;
  /** 검색 결과 목록 */
  posts?: PostListType[];
  postsRef?: React.RefObject<HTMLDivElement>;
  onLeftMove?: () => void;
  onRightMove?: () => void;
}

const SearchTemplate = ({
  keyword,
  searchType,
  postType,
  posts,
  postsRef,
  onLeftMove,
  onRightMove,
}: SearchTemplateProps) => {
  const isTag = searchType === 'tag';
  return (
    <NavBar focusType="main">
      <styles.Container>
        <PageHeader keyword={keyword} isTag={isTag} />
        <styles.PagesWrapper>
          {keyword ? (
            <styles.ContentWrap>
              <StyledText
                color={COLORS.grayscale.gray6}
                textStyleName={TEXT_STYLE_NAME.subtitle2R}
                className="mobile-title"
              >
                <styles.KeyWordWrap isTag={isTag}>
                  {isTag ? `#${keyword}` : keyword}
                </styles.KeyWordWrap>
                검색결과
              </StyledText>
              <styles.SwitchButtonArea>
                <SwitchButton
                  leftLabel="의뢰"
                  rightLabel="실험"
                  initRight={postType === 'experiment'}
                  onLeftMove={onLeftMove}
                  onRightMove={onRightMove}
                />
              </styles.SwitchButtonArea>
              <PostsWrap
                postType={postType}
                posts={posts}
                ref={postsRef}
                placeholder="검색 결과가 없습니다"
              />
            </styles.ContentWrap>
          ) : (
            <StyledText
              textStyleName={TEXT_STYLE_NAME.subtitle2R}
              color={COLORS.grayscale.gray6}
              className="mobile-text"
            >
              검색어를 입력해주세요
            </StyledText>
          )}
        </styles.PagesWrapper>
      </styles.Container>
    </NavBar>
  );
};

export default SearchTemplate;
