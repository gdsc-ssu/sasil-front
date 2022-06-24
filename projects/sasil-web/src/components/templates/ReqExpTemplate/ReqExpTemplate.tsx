import React from 'react';

import Posts, { PostsWrapProps } from '@/components/templates/PostsWrap';
import NavBar from '@/components/templates/NavBar';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './ReqExpTemplate.style';

export interface ReqExpTemplateProps extends PostsWrapProps, PageHeaderProps {
  forwardedRef?: React.RefObject<HTMLDivElement>;
}

const ReqExpTemplate = ({
  type,
  categories,
  posts,
  forwardedRef,
}: ReqExpTemplateProps) => (
  <NavBar focusType={type}>
    <styles.Container>
      <PageHeader type={type} categories={categories} />
      <styles.PagesWrapper>
        <Posts posts={posts} ref={forwardedRef} />
      </styles.PagesWrapper>
    </styles.Container>
  </NavBar>
);

export default ReqExpTemplate;
