import { ReactNode } from 'react';
import PostWriteNav from '@/components/organisms/PostWriteNav';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './ReqExpTemplate.style';

interface Props extends PageHeaderProps {
  children: ReactNode;
}

// TODO 페이지 구현하면 NavBar 연결
const ReqExpTemplate = ({ type, sortType, categories, children }: Props) => (
  <styles.Template>
    {/* <NavBar> */}
    <styles.Scroll>
      <PageHeader type={type} sortType={sortType} categories={categories} />
      {children}
    </styles.Scroll>
    <PostWriteNav />
    {/* </NavBar> */}
  </styles.Template>
);

export default ReqExpTemplate;
