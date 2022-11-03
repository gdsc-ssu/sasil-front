import SasilLogoIcon from '@/assets/icons/SasilLogo.svg';
import SearchIcon from '@/assets/icons/Search.svg';

import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import ProfileImage from '@/components/atoms/ProfileImage';
import StyledText from '@/components/atoms/StyledText';
import StyledLink from '@/components/atoms/StyledLink';
import * as styles from './PageHeader.style';

// TODO: ProfileImg 클릭 동작
// TODO 로고 '사실;' 폰트 스타일이 mobile용 title로 변환되는지 확인
const PageHeader = () => (
  <styles.StyledPageHeader>
    <styles.ContentWrapper>
      <styles.TopWrapper>
        <styles.WebLogoWrapper>
          <SasilLogoIcon width="166" height="166" />
        </styles.WebLogoWrapper>
        <styles.MobileLogoWrapper>
          <SasilLogoIcon width="64" height="64" />
          <StyledText
            color={COLORS.primary.normal}
            textStyleName={TEXT_STYLE_NAME.title}
          >
            사실;
          </StyledText>
        </styles.MobileLogoWrapper>
        <styles.IconsWrapper>
          <ProfileImage size={32} />
          <StyledLink url={URL_INFO.search}>
            <SearchIcon width="28" height="28" />
          </StyledLink>
        </styles.IconsWrapper>
      </styles.TopWrapper>
    </styles.ContentWrapper>
  </styles.StyledPageHeader>
);

export default PageHeader;
