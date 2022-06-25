import React from 'react';

import Posts, { PostsWrapProps } from '@/components/templates/PostsWrap';
import NavBar from '@/components/templates/NavBar';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './ReqExpTemplate.style';

export interface ReqExpTemplateProps extends PostsWrapProps, PageHeaderProps {
  postsRef?: React.RefObject<HTMLDivElement>;
}

const ReqExpTemplate = ({
  type,
  categories,
  posts,
  postsRef,
}: ReqExpTemplateProps) => (
  <NavBar focusType={type}>
    <styles.Container>
      <PageHeader type={type} categories={categories} />
      <styles.PagesWrapper>
        <Posts posts={posts} ref={postsRef} />
      </styles.PagesWrapper>
    </styles.Container>
  </NavBar>
);

export default ReqExpTemplate;
