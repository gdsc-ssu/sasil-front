import { PostType } from 'src/constants';
import { getAsync, ApiResult } from './apiUtils';
import { StateType, PostListType } from './post';

export type SortType = 'recent' | 'popular';

export type InfResultType<T> = {
  list: T;
  nextPage: number;
  isLast: boolean;
};

/**
 * 기준에 따른 게시물 목록 반환하는 함수
 *
 * @param type 게시물 종류 (experiment | request)
 * @param page page number
 * @param display 게시물 개수
 * @param sort 정렬 기준 (recent | popular)
 * @param state 의뢰에 대한 응답 상태에 따른 의뢰 게시물의 구분 (all | wait | answered)
 */
export const getPostsAsync = async (
  type: PostType,
  page: number,
  display: number,
  sort: SortType,
  state?: StateType,
): ApiResult<InfResultType<PostListType[]>> => {
  const response = await getAsync<PostListType[], any>(`/posts/${type}`, {
    params: { page, display, sort, state },
  });

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
