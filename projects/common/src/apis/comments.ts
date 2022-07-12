import { getAsync, postAsync, deleteAsync, ApiResult } from './apiUtils';
import { InfResultType } from './posts';
import { WriterType } from './post';

export interface CommentType {
  id: number;
  createdAt: string;
  updatedAt: string;
  content: string;
  user?: WriterType;
  parentId?: number;
}

interface AddCommentAsyncInput {
  content: string;
}

/**
 * 게시물의 댓글 목록 조회 (최신순)
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 * @param page
 * @param display
 */
export const getCommentListAsync = async (
  postType: 'experiment' | 'request',
  postId: number,
  page: number,
  display: number,
): ApiResult<InfResultType<CommentType[]>> => {
  const response = await getAsync<CommentType[], any>(
    `post/${postType}/${postId}/comments`,
    {
      params: { page, display },
    },
  );

  if (response.isSuccess) {
    return {
      isSuccess: response.isSuccess,
      result: {
        list: response.result,
        nextPage: page + 1,
        isLast: response.result.length < display,
      },
    };
  }

  return response;
};

/**
 * 댓글 작성
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 * @param content 댓글 내용
 */
export const addCommentAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  postId: number,
  content: string,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, AddCommentAsyncInput>(
    `/post/${postType}/${postId}/comment`,
    {
      content,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};

/**
 * 댓글 삭제
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 * @param commentId 댓글 id값
 */
export const deleteCommentAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  postId: number,
  commentId: number,
): ApiResult<undefined> => {
  const result = await deleteAsync<undefined, any>(
    `/post/${postType}/${postId}/comment/${commentId}`,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};
