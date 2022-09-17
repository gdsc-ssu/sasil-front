import React from 'react';

import PostsWrap, { PostsWrapProps } from '@/components/templates/PostsWrap';
import NavBar from '@/components/templates/NavBar';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './ReqExpTemplate.style';

export interface ReqExpTemplateProps extends PostsWrapProps, PageHeaderProps {
  postsRef?: React.RefObject<HTMLDivElement>;
}

const ReqExpTemplate = ({
  postType,
  sortType,
  categories,
  posts,
  postsRef,
}: ReqExpTemplateProps) => (
  <NavBar focusType={postType}>
    <styles.Container>
      <PageHeader
        postType={postType}
        sortType={sortType}
        categories={categories}
      />
      <styles.PagesWrapper>
        <PostsWrap postType={postType} posts={posts} ref={postsRef} />
      </styles.PagesWrapper>
    </styles.Container>
  </NavBar>
);

export default ReqExpTemplate;
