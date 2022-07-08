import { Pressable } from 'react-native';
import { COLORS, PostListType, TEXT_STYLE_NAME } from '@sasil/common';

import SasilLogo from '@/assets/icons/SasilLogo';
import SearchIcon from '@/assets/icons/Search';
import RightIcon from '@/assets/icons/Right';

import StyledText from '@/components/atom/StyledText';
import ProfileImage from '@/components/atom/ProfileImage';
import PostWriteNav from '@/components/organisms/PostWriteNav';
import {
  MainPostsWrap,
  postsTitleType,
} from '@/components/templates/PostsWrap';
import * as styles from './MainTemplate.style';

interface ContentProps {
  type: postsTitleType;
  posts: PostListType[];
}

const Content = ({ type, posts }: ContentProps) => (
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
      <MainPostsWrap posts={posts} type={type} />
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

interface MainTemplateProps {
  // TODO post type 지정
  hotReqPosts: PostListType[];
  popReqPosts: PostListType[];
  popExpPosts: PostListType[];
  onProfilePress?: () => void;
}

// TODO 페이지 구현하면 NavBar 연결
const MainTemplate = ({
  hotReqPosts,
  popReqPosts,
  popExpPosts,
  onProfilePress,
}: MainTemplateProps) => (
  <styles.Template>
    {/* <NavBar> */}
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
          <Pressable onPress={onProfilePress}>
            <ProfileImage size={32} />
          </Pressable>
          <SearchIcon size={32} />
        </styles.MenuWrap>
      </styles.Top>
      <Content type="hotRequest" posts={hotReqPosts} />
      <Content type="popExperiment" posts={popExpPosts} />
      <Content type="popRequest" posts={popReqPosts} />
    </styles.Scroll>
    <PostWriteNav />
    {/* </NavBar> */}
  </styles.Template>
);

export default MainTemplate;
