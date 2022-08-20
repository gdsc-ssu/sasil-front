import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  expPostDetail,
  expRequestPost,
  reqAnswerPosts,
  reqPostDetail,
  interestsInfo,
} from 'src/dummyData';
import PostDetailTemplate, { PostDetailTemplateProps } from '.';

export default {
  title: 'components/template/PostDetailTemplate',
  component: PostDetailTemplate,
} as ComponentMeta<typeof PostDetailTemplate>;

const Template: ComponentStory<typeof PostDetailTemplate> = ({
  type,
  post,
  relativePosts,
  likeInfo,
  bookmarkInfo,
  menuDisplayInfo,
  onMenuDisplayToggle,
}: PostDetailTemplateProps) => (
  <PostDetailTemplate
    type={type}
    post={post}
    relativePosts={relativePosts}
    likeInfo={likeInfo}
    bookmarkInfo={bookmarkInfo}
    menuDisplayInfo={menuDisplayInfo}
    onMenuDisplayToggle={onMenuDisplayToggle}
  />
);

export const RequestPostDetail = Template.bind({});
RequestPostDetail.args = {
  type: 'request',
  post: reqPostDetail,
  relativePosts: reqAnswerPosts,
};

export const ExperimentPostDetail = Template.bind({});
ExperimentPostDetail.args = {
  type: 'experiment',
  post: expPostDetail,
  relativePosts: expRequestPost,
  likeInfo: interestsInfo.likeInfo,
  bookmarkInfo: interestsInfo.bookmarkInfo,
};
