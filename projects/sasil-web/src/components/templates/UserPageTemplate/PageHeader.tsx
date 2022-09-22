import { COLORS, TEXT_STYLE_NAME, UserType } from '@sasil/common';
import ProfileImage from '@/components/atoms/ProfileImage';
import StyledLink from '@/components/atoms/StyledLink';
import StyledButton from '@/components/atoms/StyledButton';
import StyledText from '@/components/atoms/StyledText';
import * as styles from './PageHeader.style';

export interface PageHeaderProps {
  tabType: 'userPosts' | 'bookmarkPosts';
  userInfo: UserType | undefined;
}

// TODO: 마이페이지면 프로필 수정 기능 추가
// TODO: 라벨 이름 수정
export const BTN_LABEL = {
  userPosts: '작성한 글',
  bookmarkPosts: '북마크한 글',
} as const;

const PageHeader = ({ tabType, userInfo }: PageHeaderProps) => {
  const [userPostsBtnColor, bookmarkPostsBtnColor] =
    tabType === 'userPosts'
      ? [COLORS.primary.normal, COLORS.grayscale.gray4]
      : [COLORS.grayscale.gray4, COLORS.primary.normal];

  return (
    <styles.StyledPageHeader>
      <styles.ProfileWrapper>
        <ProfileImage
          src={userInfo?.profileImg}
          size={200}
          className="userpage-profile-img"
        />
        <StyledText textStyleName={TEXT_STYLE_NAME.subtitle1}>
          {`${userInfo?.nickname || '비회원'} 님`}
        </StyledText>
      </styles.ProfileWrapper>
      <styles.SelectTabWrapper tabType={tabType}>
        <StyledLink
          url={{
            pathname: `/user/${userInfo?.id}`,
            query: { tab: 'userPosts' },
          }}
          color={userPostsBtnColor}
          textStyleName={TEXT_STYLE_NAME.subtitle2R}
          className="tab-btn-userPosts"
        >
          {BTN_LABEL.userPosts}
        </StyledLink>
        <StyledLink
          url={{
            pathname: `/user/${userInfo?.id}`,
            query: { tab: 'bookmarkPosts' },
          }}
          color={bookmarkPostsBtnColor}
          textStyleName={TEXT_STYLE_NAME.subtitle2R}
          className="tab-btn-bookmarkPosts"
        >
          {BTN_LABEL.bookmarkPosts}
        </StyledLink>
      </styles.SelectTabWrapper>
    </styles.StyledPageHeader>
  );
};

export default PageHeader;
