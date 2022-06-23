import NavBar from '@/components/templates/NavBar';
import MainPostsWrap, {
  postsTitleType,
} from '@/components/templates/PostsWrap';
import { URL_INFO } from '@/constants/urlInfo';
import PostWriteNav from '@/components/organisms/PostWriteNav';
import StyledText from '@/components/atoms/StyledText';
import RightIcon from '@/assets/icons/Right.svg';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import { useRouter } from 'next/router';
import * as styles from './MainTemplate.style';
import PageHeader from './PageHeader';
import { POSTS_INFO } from '../PostsWrap/MainPostsNavCard';

interface ViewMoreButtonProp {
  type: postsTitleType;
}
const ViewMoreButton = ({ type }: ViewMoreButtonProp) => {
  const router = useRouter();
  const viewMoreHandler = () => {
    router.push(`/${POSTS_INFO[type].postType}`);
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
  <NavBar targetURL={URL_INFO.Main}>
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
