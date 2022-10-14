import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expPosts, reqPosts } from 'src/dummyData';
import SearchTemplate, { SearchTemplateProps } from './SearchTemplate';

export default {
  title: 'components/template/SearchTemplate',
  component: SearchTemplate,
} as ComponentMeta<typeof SearchTemplate>;

const Template: ComponentStory<typeof SearchTemplate> = ({
  keyword,
  searchType,
  postType,
  posts,
  postsRef,
}: SearchTemplateProps) => (
  <SearchTemplate
    keyword={keyword}
    searchType={searchType}
    postType={postType}
    posts={posts}
  />
);

export const TagSearchTemplate = Template.bind({});
TagSearchTemplate.args = {
  keyword: '태그',
  searchType: 'tag',
  postType: 'experiment',
  posts: expPosts,
};

export const wordSearchTemplate = Template.bind({});
wordSearchTemplate.args = {
  keyword: '키워드',
  searchType: 'query',
  postType: 'request',
  posts: reqPosts,
};
