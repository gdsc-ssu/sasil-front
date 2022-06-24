import { getAsync, ApiResult } from './apiUtils';

export type SortType = 'recent' | 'popular';
export type StateType = 'all' | 'wait' | 'answered';

export type CategoryType = {
  id: number;
  name: string;
};

export interface PostInfoType {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  thumbnail?: string | null;
  likeCount: number;
  user: {
    id: number;
    nickname: string;
    profile_img?: string | null;
  };
  categories: CategoryType[] | [];
  state?: Exclude<StateType, 'all'>;
}

export type ResultType<T> = {
  posts: T;
  nextPage: number;
  isLast: boolean;
};

export interface PostsAsyncInput {
  display: number;
  page: number;
  sort: SortType;
  state?: StateType;
}

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
  type: 'experiment' | 'request',
  page: number,
  display: number,
  sort: SortType,
  state?: StateType,
): ApiResult<ResultType<PostInfoType[]>> => {
  const response = await getAsync<PostInfoType[], PostsAsyncInput>(
    `/posts/${type}`,
    {
      params: { page, display, sort, state },
    },
  );

  if (response.isSuccess) {
    return {
      isSuccess: response.isSuccess,
      result: {
        posts: response.result,
        nextPage: page + 1,
        isLast: response.result.length < display,
      },
    };
  }

  return response;
};
