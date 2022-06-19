import NavBar from '@/components/templates/NavBar';
import { URL_INFO } from '@/constants/urlInfo';
import PostAdd from '@/components/organisms/postAdd';
import PostWrap from '@/components/templates/MainPosts/PostWrap';

import SasilLogo from '@/assets/icons/SasilLogo.svg';

import { expPosts, reqPosts } from 'src/dummyData';
import * as styles from './MainTemplate.style';

const MainTemplate = () => (
  <>
    <NavBar targetURL={URL_INFO.Main}> </NavBar>
    <styles.Content>
      <styles.Icon>
        <SasilLogo width="166" height="166" />
      </styles.Icon>
      <styles.Wrap>
        <PostWrap posts={reqPosts} type="hotRequest" />
      </styles.Wrap>
      <styles.Wrap className="exp">
        <PostWrap posts={expPosts} type="popExperiment" />
      </styles.Wrap>
      <styles.Wrap>
        <PostWrap posts={reqPosts} type="popRequest" />
      </styles.Wrap>
    </styles.Content>
    <styles.PostAddWrap>
      <PostAdd />
    </styles.PostAddWrap>
  </>
);

export default MainTemplate;
