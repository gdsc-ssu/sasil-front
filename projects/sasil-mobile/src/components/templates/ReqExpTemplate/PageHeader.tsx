import { COLORS, TEXT_STYLE_NAME, CategoryType } from '@sasil/common';
import SearchIcon from '@/assets/icons/Search';
import SasilLogoIcon from '@/assets/icons/SasilLogo';
import ProfileImage from '@/components/atom/ProfileImage';
import StyledButton from '@/components/atom/StyledButton';
import CategoryBox from '@/components/molecule/CategoryBox';
import * as styles from './PageHeader.style';

export const BTN_LABEL = {
  request: {
    recent: '최신 의뢰',
    popular: '인기 의뢰',
    button: '의뢰하기',
  },
  experiment: {
    recent: '최신 실험',
    popular: '인기 실험',
    button: '실험하기',
  },
};

export interface PageHeaderProps {
  type: 'request' | 'experiment';
  sortType?: 'recent' | 'popular';
  categories: CategoryType[] | [];
}

// TODO: 동작 기능 추가
const PageHeader = ({ type, sortType, categories }: PageHeaderProps) => (
  <styles.StyledPageHeader>
    <styles.TopWrapper>
      <SasilLogoIcon />
      <styles.IconsWrapper>
        <SearchIcon size={28} />
        <ProfileImage size={32} />
      </styles.IconsWrapper>
    </styles.TopWrapper>
    <styles.TitleWrapper>
      <StyledButton
        text={BTN_LABEL[type].recent}
        fontColor={
          sortType === 'recent' || sortType === undefined
            ? COLORS.grayscale.black
            : COLORS.grayscale.gray4
        }
        textStyleName={TEXT_STYLE_NAME.subtitle2B}
        // onPress={onPress}
      />
      <StyledButton
        text={BTN_LABEL[type].popular}
        fontColor={
          sortType === 'popular'
            ? COLORS.grayscale.black
            : COLORS.grayscale.gray4
        }
        textStyleName={TEXT_STYLE_NAME.subtitle2B}
        // onPress={onPress}
      />
    </styles.TitleWrapper>
    <styles.CategoryWrapper>
      {categories.map((category) => (
        <CategoryBox
          name={category.name}
          isWithBackground={false}
          style={styles.categoryItem}
        />
      ))}
    </styles.CategoryWrapper>
  </styles.StyledPageHeader>
);

export default PageHeader;
