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
  expResPost,
  reqResPost,
}: SearchTemplateProps) => (
  <SearchTemplate
    keyword={keyword}
    searchType={searchType}
    postType={postType}
    expResPost={expResPost}
    reqResPost={reqResPost}
  />
);

export const TagSearchTemplate = Template.bind({});
TagSearchTemplate.args = {
  keyword: '태그',
  searchType: 'tag',
  postType: 'experiment',
  expResPost: expPosts,
  reqResPost: reqPosts,
};

export const wordSearchTemplate = Template.bind({});
wordSearchTemplate.args = {
  keyword: '키워드',
  searchType: 'query',
  postType: 'request',
  expResPost: expPosts,
  reqResPost: reqPosts,
};
