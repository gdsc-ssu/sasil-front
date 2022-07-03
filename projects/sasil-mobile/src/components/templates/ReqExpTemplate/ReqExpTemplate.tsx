import { ReactNode } from 'react';
import PostWriteNav from '@/components/organisms/PostWriteNav';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './ReqExpTemplate.style';

interface Props extends PageHeaderProps {
  children: ReactNode;
}

// TODO 페이지 구현하면 NavBar 연결
const ReqExpTemplate = ({ children, ...pageHeaderProps }: Props) => (
  <styles.Template>
    {/* <NavBar> */}
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <PageHeader {...pageHeaderProps} />
    <styles.Scroll>{children}</styles.Scroll>
    <PostWriteNav />
    {/* </NavBar> */}
  </styles.Template>
);

export default ReqExpTemplate;
