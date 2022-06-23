import { expPosts, reqPosts } from '@/components/dummyData';
import MainTemplate from '@/components/templates/MainTemplate';
import * as styles from './MainScreen.style';

const MainScreen = () => (
  <styles.Screen>
    <MainTemplate
      hotReqPosts={reqPosts}
      popExpPosts={expPosts}
      popReqPosts={reqPosts}
    />
  </styles.Screen>
);

export default MainScreen;
