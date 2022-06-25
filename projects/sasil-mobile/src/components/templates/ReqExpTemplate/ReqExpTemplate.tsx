import PostWriteNav from '@/components/organisms/PostWriteNav';
import PostsWrap, { PostsWrapProps } from '@/components/templates/PostsWrap';
import NavBar from '@/components/templates/NavBar';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './ReqExpTemplate.style';

interface Props extends PageHeaderProps, PostsWrapProps {}

// TODO 페이지 구현하면 NavBar 연결
const ReqExpTemplate = ({ type, sortType, categories, posts }: Props) => (
  <styles.Template>
    {/* <NavBar> */}
    <styles.Scroll>
      <PageHeader type={type} sortType={sortType} categories={categories} />
      <PostsWrap posts={posts} type={type} />
    </styles.Scroll>
    <PostWriteNav />
    {/* </NavBar> */}
  </styles.Template>
);

export default ReqExpTemplate;
