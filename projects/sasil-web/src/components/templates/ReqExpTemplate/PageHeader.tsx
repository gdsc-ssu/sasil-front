import { useRouter } from 'next/router';

import { COLORS, TEXT_STYLE_NAME, CategoryType } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
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
  postType: 'request' | 'experiment';
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

// TODO: ProfileImg 클릭 동작
const PageHeader = ({ postType, sortType, categories }: PageHeaderProps) => {
  const router = useRouter();
  const goWrite = () => router.push(`/write/${postType}`);

  const [recentBtnColor, popularBtnColor] =
    sortType === 'recent'
      ? [COLORS.grayscale.black, COLORS.grayscale.gray4]
      : [COLORS.grayscale.gray4, COLORS.grayscale.black];

  return (
    <styles.StyledPageHeader>
      <styles.ContentWrapper>
        <styles.TopWrapper>
          <styles.WebLogoWrapper>{HEADER_ICON[postType]}</styles.WebLogoWrapper>
          <styles.MobileLogoWrapper>
            {HEADER_ICON.mobile}
          </styles.MobileLogoWrapper>
          <styles.IconsWrapper>
            <StyledLink url={URL_INFO.search}>
              <SearchIcon width="28" height="28" />
            </StyledLink>
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
            {BTN_LABEL[postType].recent}
          </StyledLink>
          <StyledLink
            url={{ query: { sort: 'popular' } }}
            color={popularBtnColor}
            textStyleName={TEXT_STYLE_NAME.title}
            className="fixed-text-style"
          >
            {BTN_LABEL[postType].popular}
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
            text={BTN_LABEL[postType].write}
            textStyleName={TEXT_STYLE_NAME.button2B}
            onClick={goWrite}
          />
        </styles.WriteButtonWrap>
      </styles.ContentWrapper>
    </styles.StyledPageHeader>
  );
};

export default PageHeader;
