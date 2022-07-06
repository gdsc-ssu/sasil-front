import { postAsync, deleteAsync, ApiResult } from './apiUtils';

/**
 * 좋아요 추가
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 */
export const addLikeAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  postId: number,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, any>(
    `/post/${postType}/${postId}/like`,
    null,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};

/**
 * 좋아요 삭제
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 */
export const deleteLikeAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  postId: number,
): ApiResult<undefined> => {
  const result = await deleteAsync<undefined, any>(
    `/post/${postType}/${postId}/like`,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};

/**
 * 북마크 추가
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 */
export const addBookmarkAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  postId: number,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, any>(
    `/post/${postType}/${postId}/bookmark`,
    null,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};

/**
 * 북마크 삭제
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 */
export const deleteBookmarkAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  postId: number,
): ApiResult<undefined> => {
  const result = await deleteAsync<undefined, any>(
    `/post/${postType}/${postId}/bookmark`,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};
