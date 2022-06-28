import { expPosts, categories } from '@/components/dummyData';
import ReqExpTemplate from '@/components/templates/ReqExpTemplate';
import * as styles from './ExperimentScreen.style';

const ExperimentScreen = () => {
  const sortType = 'recent'; // TODO

  return (
    <styles.Screen>
      <ReqExpTemplate
        type="experiment"
        sortType={sortType}
        posts={expPosts}
        categories={categories}
      />
    </styles.Screen>
  );
};

export default ExperimentScreen;
