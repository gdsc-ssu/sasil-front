import { reqPosts, categories } from '@/components/dummyData';
import ReqExpTemplate from '@/components/templates/ReqExpTemplate';
import * as styles from './RequestScreen.style';

const RequestScreen = () => {
  const sortType = 'recent'; // TODO

  return (
    <styles.Screen>
      <ReqExpTemplate
        type="request"
        sortType={sortType}
        posts={reqPosts}
        categories={categories}
      />
    </styles.Screen>
  );
};

export default RequestScreen;
