import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostEditor, { PostEditorProps } from './PostEditor';

export default {
  title: 'components/organism/PostEditor',
  component: PostEditor,
} as ComponentMeta<typeof PostEditor>;

const Template: ComponentStory<typeof PostEditor> = ({
  editorRef,
  title,
  cgValue,
  cgInputList,
  onUploadImage,
}: PostEditorProps) => (
  <PostEditor
    editorRef={editorRef}
    title={title}
    cgValue={cgValue}
    cgInputList={cgInputList}
    onUploadImage={onUploadImage}
  />
);

export const RequestEditor = Template.bind({});
RequestEditor.args = {
  title: '의뢰 제목',
  cgInputList: ['카테고리1', '카테고리2', '카테고리3'],
};

export const ExperimentEditor = Template.bind({});
ExperimentEditor.args = {
  title: '실험 제목',
  cgInputList: ['카테고리1', '카테고리2', '카테고리3'],
};
