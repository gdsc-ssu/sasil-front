import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import SearchIcon from '@/assets/icons/SearchSlim.svg';
import StyledText from '@/components/atoms/StyledText';
import { SearchBarWrapped } from '@/components/molelcules/SearchBar';
import * as styles from './PageHeader.style';

export interface PageHeaderProps {
  keyword?: string;
  isTag: boolean;
}

const PageHeader = ({ keyword, isTag }: PageHeaderProps) => (
  <styles.HeaderWrap>
    <styles.MobileHeader>
      <SearchBarWrapped className="mobile-search-bar" />
    </styles.MobileHeader>

    <styles.WebHeader>
      <styles.IconWrap>
        <SearchIcon width="60px" height="60px" />
      </styles.IconWrap>
      <StyledText
        color={COLORS.grayscale.gray6}
        textStyleName={TEXT_STYLE_NAME.subtitle1}
      >
        {keyword ? (
          <>
            <styles.KeyWordWrap isTag={isTag}>
              {isTag ? `#${keyword}` : keyword}
            </styles.KeyWordWrap>
            검색결과
          </>
        ) : (
          `검색어를 입력해주세요..`
        )}
      </StyledText>
    </styles.WebHeader>
  </styles.HeaderWrap>
);

export default PageHeader;
