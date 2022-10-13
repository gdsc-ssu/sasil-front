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
  stype,
  ptype,
  expResPost,
  reqResPost,
}: SearchTemplateProps) => (
  <SearchTemplate
    keyword={keyword}
    stype={stype}
    ptype={ptype}
    expResPost={expResPost}
    reqResPost={reqResPost}
  />
);

export const TagSearchTemplate = Template.bind({});
TagSearchTemplate.args = {
  keyword: '태그',
  stype: 'tag',
  ptype: 'experiment',
  expResPost: expPosts,
  reqResPost: reqPosts,
};

export const wordSearchTemplate = Template.bind({});
wordSearchTemplate.args = {
  keyword: '키워드',
  stype: 'query',
  ptype: 'request',
  expResPost: expPosts,
  reqResPost: reqPosts,
};
