import { useRouter } from 'next/router';

import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import { URL_INFO } from '@/constants/urlInfo';
import RightIcon from '@/assets/icons/Right.svg';
import { POSTS_INFO } from '@/components/templates/PostsWrap/MainPostsNavCard';
import NavBar from '@/components/templates/NavBar';
import {
  MainPostsWrap,
  postsTitleType,
} from '@/components/templates/PostsWrap';
import PostWriteNav from '@/components/organisms/PostWriteNav';
import StyledText from '@/components/atoms/StyledText';
import * as styles from './MainTemplate.style';
import PageHeader from './PageHeader';

interface ViewMoreButtonProp {
  type: postsTitleType;
}
const ViewMoreButton = ({ type }: ViewMoreButtonProp) => {
  const router = useRouter();
  const viewMoreHandler = () => {
    router.push(URL_INFO[POSTS_INFO[type].postType]);
  };
  return (
    <styles.ViewMoreButton onClick={viewMoreHandler}>
      <StyledText
        color={COLORS.grayscale.gray7}
        textStyleName={TEXT_STYLE_NAME.body3}
      >
        더보기
      </StyledText>
      <RightIcon />
    </styles.ViewMoreButton>
  );
};

interface MainTemplateProps {
  // TODO post type 지정
  hotReqPosts: any;
  popReqPosts: any;
  popExpPosts: any;
}

const MainTemplate = ({
  hotReqPosts,
  popReqPosts,
  popExpPosts,
}: MainTemplateProps) => (
  <NavBar focusType="main">
    <styles.Container>
      <PageHeader />
      <styles.Content>
        <ViewMoreButton type="hotRequest" />
        <styles.Posts>
          <MainPostsWrap posts={hotReqPosts} type="hotRequest" />
        </styles.Posts>
      </styles.Content>
      <styles.Content className="exp">
        <ViewMoreButton type="popExperiment" />
        <styles.Posts>
          <MainPostsWrap posts={popExpPosts} type="popExperiment" />
        </styles.Posts>
      </styles.Content>
      <styles.Content>
        <ViewMoreButton type="popRequest" />
        <styles.Posts>
          <MainPostsWrap posts={popReqPosts} type="popRequest" />
        </styles.Posts>
      </styles.Content>
    </styles.Container>

    <PostWriteNav />
  </NavBar>
);

export default MainTemplate;
