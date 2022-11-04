import React from 'react';

import SwitchButton from '@/components/molelcules/SwitchButton';
import PostsWrap, { PostsWrapProps } from '@/components/templates/PostsWrap';
import NavBar from '@/components/templates/NavBar';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './UserPageTemplate.style';

export interface UserPageTemplateProps extends PostsWrapProps, PageHeaderProps {
  postsRef?: React.RefObject<HTMLDivElement>;
  isMyPage: boolean;
  onLeftMove?: () => void;
  onRightMove?: () => void;
}

const UserPageTemplate = ({
  userInfo,
  tabType,
  postType,
  posts,
  postsRef,
  onLeftMove,
  onRightMove,
  isMyPage,
}: UserPageTemplateProps) => (
  <NavBar focusType={isMyPage ? 'user' : undefined}>
    <styles.Container>
      <PageHeader tabType={tabType} userInfo={userInfo} />
      <styles.BodyWrapper>
        <styles.SwitchButtonArea>
          <SwitchButton
            leftLabel="의뢰"
            rightLabel="실험"
            initRight={postType === 'experiment'}
            onLeftMove={onLeftMove}
            onRightMove={onRightMove}
          />
        </styles.SwitchButtonArea>
        <PostsWrap
          postType={postType}
          posts={posts}
          ref={postsRef}
          placeholder="게시물이 없습니다"
        />
      </styles.BodyWrapper>
    </styles.Container>
  </NavBar>
);

export default UserPageTemplate;
