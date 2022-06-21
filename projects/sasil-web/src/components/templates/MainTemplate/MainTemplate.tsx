import NavBar from '@/components/templates/NavBar';
import PostsWrap from '@/components/templates/MainPostsWrap/PostsWrap';
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
        <PostsWrap posts={reqPosts} type="hotRequest" />
      </styles.Content>
      <styles.Content className="exp">
        <PostsWrap posts={expPosts} type="popExperiment" />
      </styles.Content>
      <styles.Content>
        <PostsWrap posts={reqPosts} type="popRequest" />
      </styles.Content>
    </styles.Container>
    <styles.PostWriteNavWrap>
      <PostWriteNav />
    </styles.PostWriteNavWrap>
  </NavBar>
);

export default MainTemplate;
