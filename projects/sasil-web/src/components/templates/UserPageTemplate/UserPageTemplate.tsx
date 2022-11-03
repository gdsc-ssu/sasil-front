import React from 'react';

import SwitchButton from '@/components/molelcules/SwitchButton';
import PostsWrap, { PostsWrapProps } from '@/components/templates/PostsWrap';
import NavBar from '@/components/templates/NavBar';
import PageHeader, { PageHeaderProps } from './PageHeader';
import * as styles from './UserPageTemplate.style';

export interface UserPageTemplateProps extends PostsWrapProps, PageHeaderProps {
  postsRef?: React.RefObject<HTMLDivElement>;
  onLeftMove?: () => void;
  onRightMove?: () => void;
}

// TODO: PostType을 선택하는 컴포넌트 구현
const UserPageTemplate = ({
  userInfo,
  tabType,
  postType,
  posts,
  postsRef,
  onLeftMove,
  onRightMove,
}: UserPageTemplateProps) => (
  <NavBar focusType="user">
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
          emptyNotice="게시물이 없습니다"
        />
      </styles.BodyWrapper>
    </styles.Container>
  </NavBar>
);

export default UserPageTemplate;
