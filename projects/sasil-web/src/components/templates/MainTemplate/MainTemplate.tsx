import NavBar from '@/components/templates/NavBar';
import MainPostsWrap from '@/components/templates/PostsWrap';
import SasilLogo from '@/assets/icons/SasilLogo.svg';
import { URL_INFO } from '@/constants/urlInfo';
import { expPosts, reqPosts } from 'src/dummyData';
import PostWriteNav from '@/components/organisms/PostWriteNav';
import * as styles from './MainTemplate.style';

const MainTemplate = () => (
  <NavBar targetURL={URL_INFO.Main}>
    <styles.Container>
      <styles.IconWrap>
        <SasilLogo width="166" height="166" />
      </styles.IconWrap>
      <styles.Content>
        <MainPostsWrap posts={reqPosts} type="hotRequest" />
      </styles.Content>
      <styles.Content className="exp">
        <MainPostsWrap posts={expPosts} type="popExperiment" />
      </styles.Content>
      <styles.Content>
        <MainPostsWrap posts={reqPosts} type="popRequest" />
      </styles.Content>
    </styles.Container>
    <styles.PostWriteNavWrap>
      <PostWriteNav />
    </styles.PostWriteNavWrap>
  </NavBar>
);

export default MainTemplate;
