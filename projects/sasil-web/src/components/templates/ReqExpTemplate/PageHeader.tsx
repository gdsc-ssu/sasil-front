import { COLORS, TEXT_STYLE_NAME, CategoryType } from '@sasil/common';
import RequestIcon from '@/assets/icons/Request.svg';
import ExperimentIcon from '@/assets/icons/Experiment.svg';
import SasilLogoIcon from '@/assets/icons/SasilLogo.svg';
import SearchIcon from '@/assets/icons/Search.svg';
import StyledLink from '@/components/atoms/StyledLink';
import ProfileImage from '@/components/atoms/ProfileImage';
import StyledButton from '@/components/atoms/StyledButton';
import CategoryBox from '@/components/molelcules/CategoryBox';
import * as styles from './PageHeader.style';

export interface PageHeaderProps {
  type: 'request' | 'experiment';
  sortType: 'recent' | 'popular';
  categories: CategoryType[];
}

// TODO: common에 넣을지 결정해야함
export const BTN_LABEL = {
  request: {
    recent: '최신 의뢰',
    popular: '인기 의뢰',
    write: '의뢰하기',
  },
  experiment: {
    recent: '최신 실험',
    popular: '인기 실험',
    write: '실험하기',
  },
} as const;

const HEADER_ICON = {
  request: <RequestIcon width="60" height="60" />,
  experiment: <ExperimentIcon width="60" height="60" />,
  mobile: <SasilLogoIcon width="64" height="64" />,
};

// TODO: 검색 버튼 동작, ProfileImg 클릭 동작
const PageHeader = ({ type, sortType, categories }: PageHeaderProps) => {
  const [recentBtnColor, popularBtnColor] =
    sortType === 'recent'
      ? [COLORS.grayscale.black, COLORS.grayscale.gray4]
      : [COLORS.grayscale.gray4, COLORS.grayscale.black];

  return (
    <styles.StyledPageHeader>
      <styles.ContentWrapper>
        <styles.TopWrapper>
          <styles.WebLogoWrapper>{HEADER_ICON[type]}</styles.WebLogoWrapper>
          <styles.MobileLogoWrapper>
            {HEADER_ICON.mobile}
          </styles.MobileLogoWrapper>
          <styles.IconsWrapper>
            <SearchIcon width="28" height="28" />
            <ProfileImage size={32} />
          </styles.IconsWrapper>
        </styles.TopWrapper>
        <styles.TitleWrapper>
          <StyledLink
            url={{ query: { sort: 'recent' } }}
            color={recentBtnColor}
            textStyleName={TEXT_STYLE_NAME.title}
            className="fixed-text-style"
          >
            {BTN_LABEL[type].recent}
          </StyledLink>
          <StyledLink
            url={{ query: { sort: 'popular' } }}
            color={popularBtnColor}
            textStyleName={TEXT_STYLE_NAME.title}
            className="fixed-text-style"
          >
            {BTN_LABEL[type].popular}
          </StyledLink>
        </styles.TitleWrapper>
        <styles.CategoryWrapper>
          {categories.map((category) => (
            <CategoryBox
              key={category.id}
              name={category.name}
              isWithBackground={false}
            />
          ))}
        </styles.CategoryWrapper>
        <styles.WriteButtonWrap>
          <StyledButton
            text={BTN_LABEL[type].write}
            textStyleName={TEXT_STYLE_NAME.button2B}
          />
        </styles.WriteButtonWrap>
      </styles.ContentWrapper>
    </styles.StyledPageHeader>
  );
};

export default PageHeader;
