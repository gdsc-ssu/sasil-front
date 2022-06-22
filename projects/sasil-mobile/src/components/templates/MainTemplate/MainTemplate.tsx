import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';

import SasilLogo from '@/assets/icons/SasilLogo';
import SearchIcon from '@/assets/icons/Search';
import RightIcon from '@/assets/icons/Right';

import StyledText from '@/components/atom/StyledText';
import ProfileImage from '@/components/atom/ProfileImage';
import PostWriteNav from '@/components/organisms/PostWriteNav';
import MainPostsWrap, {
  postsTitleType,
} from '@/components/templates/PostsWrap';
import { expPosts, reqPosts } from '@/components/dummyData';
import * as styles from './MainTemplate.style';

interface ContentProps {
  type: postsTitleType;
  post: any;
}

const Content = ({ type, post }: ContentProps) => (
  // TODO 더보기버튼 누르면 상세 페이지 이동하기
  <styles.Content
    backgroundColor={
      type === 'popExperiment' ? COLORS.grayscale.white : COLORS.background
    }
  >
    <styles.Scroll
      horizontal
      contentOffset={{ x: 255, y: 0 }}
      contentContainerStyle={styles.PostsContainer}
    >
      <MainPostsWrap posts={post} type={type} />
    </styles.Scroll>

    <styles.ViewMoreButton>
      <StyledText
        textStyleName={TEXT_STYLE_NAME.body3}
        color={COLORS.grayscale.gray7}
      >
        더보기
      </StyledText>
      <RightIcon color={COLORS.grayscale.gray7} />
    </styles.ViewMoreButton>
  </styles.Content>
);

const MainTemplate = () => (
  <styles.Template>
    <styles.Scroll>
      <styles.Top>
        <styles.LogoWrap>
          <SasilLogo />
          <StyledText
            textStyleName={TEXT_STYLE_NAME.title}
            color={COLORS.primary.normal}
          >
            사실;
          </StyledText>
        </styles.LogoWrap>
        <styles.MenuWrap>
          <ProfileImage size={32} />
          <styles.IconWrap>
            <SearchIcon />
          </styles.IconWrap>
        </styles.MenuWrap>
      </styles.Top>
      <Content type="hotRequest" post={reqPosts} />
      <Content type="popExperiment" post={expPosts} />
      <Content type="popRequest" post={reqPosts} />
    </styles.Scroll>
    <styles.PostWriteNavWrap>
      <PostWriteNav />
    </styles.PostWriteNavWrap>
  </styles.Template>
);

export default MainTemplate;
