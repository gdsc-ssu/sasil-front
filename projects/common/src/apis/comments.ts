import { WriterType } from './posts';

export type CommentType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  user: WriterType;
  parentId?: number;
};

export type CommentsAsyncInput = {
  postType: 'experiment' | 'request';
  postId: number;
  display: number;
  page: number;
};
