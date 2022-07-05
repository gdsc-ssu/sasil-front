import { useInfiniteQuery } from 'react-query';
import { getPostsAsync, QUERY_KEYS, InfResultType } from '../apis';
import { ApiResult } from '../apis/apiUtils';

interface PostsAsyncInput {
  page: number;
  display: number;
  sort: 'recent' | 'popular';
  state?: 'all' | 'answered' | 'wait';
}

function getResult<T>(response: Awaited<ApiResult<T>>) {
  if (response.isSuccess) {
    return response.result;
  }

  throw response.result.errorMessage;
}

/**
 * `useInfinityQuery`를 사용하는 API의 정보를 담은 객체
 */
export const LIST_API = {
  getRequests: {
    fetcher: async ({ page, display, sort, state = 'all' }: PostsAsyncInput) =>
      getResult(await getPostsAsync('request', page, display, sort, state)),
    queryKey: QUERY_KEYS.requests,
    paramType: {} as Omit<PostsAsyncInput, 'page'>,
    resultType: {} as InfResultType<any[]>,
  },
  getExperiments: {
    fetcher: async ({ page, display, sort }: Omit<PostsAsyncInput, 'state'>) =>
      getResult(await getPostsAsync('experiment', page, display, sort)),
    queryKey: QUERY_KEYS.experiments,
    paramType: {} as Omit<PostsAsyncInput, 'page' | 'state'>,
    resultType: {} as InfResultType<any[]>,
  },
} as const;

/** `useInfinityQuery`를 사용하는 API 목록 type */
export type ListApi = keyof typeof LIST_API;

/**
 * `useInfinityQuery`를 쉽게 사용할 수 있도록 하는 custom hook
 * @param api API 이름
 * @param params 전달해야 할 parameter
 * @returns `useInfiniteQuery`의 반환값
 */
const useListQuery = <T extends ListApi>(
  api: T,
  params: typeof LIST_API[T]['paramType'],
) =>
  useInfiniteQuery<typeof LIST_API[T]['resultType']>(
    [LIST_API[api].queryKey, params],
    ({ pageParam = 1 }) =>
      LIST_API[api].fetcher({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.isLast ? undefined : lastPage.nextPage,
      staleTime: 300000,
    },
  );

export default useListQuery;
