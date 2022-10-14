import { COLORS, PostListType, TEXT_STYLE_NAME } from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';
import StyledLink from '@/components/atoms/StyledLink';
import NavBar from '@/components/templates/NavBar';
import PostsWrap from '@/components/templates/PostsWrap';
import PageHeader from './PageHeader';
import * as styles from './SearchTemplate.style';

export type PostType = 'request' | 'experiment';
export type SearchType = 'tag' | 'query';

export interface SearchTemplateProps {
  /** 검색할 단어 혹은 해시태그 */
  keyword?: string;
  /** 검색 타입 (키워드(query) or 태그) */
  searchType: SearchType;
  /** 검색 결과로 보여줄 게시물 타입 */
  postType: PostType;
  /** 검색 결과 목록 */
  posts: PostListType[];
}

const SearchTemplate = ({
  keyword,
  searchType,
  postType,
  posts,
}: SearchTemplateProps) => {
  const isTag = searchType === 'tag';

  const [reqBtnColor, expBtnColor] =
    postType === 'request'
      ? [COLORS.grayscale.gray8, COLORS.grayscale.gray5]
      : [COLORS.grayscale.gray5, COLORS.grayscale.gray8];

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
              <styles.ToggleWrap>
                <StyledLink
                  url={{
                    query: { keyword, stype: searchType, ptype: 'request' },
                  }}
                  textStyleName={TEXT_STYLE_NAME.subtitle1}
                  color={reqBtnColor}
                >
                  의뢰
                </StyledLink>
                <StyledLink
                  url={{
                    query: { keyword, stype: searchType, ptype: 'experiment' },
                  }}
                  textStyleName={TEXT_STYLE_NAME.subtitle1}
                  color={expBtnColor}
                >
                  실험
                </StyledLink>
              </styles.ToggleWrap>
              <PostsWrap postType={postType} posts={posts} />
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
