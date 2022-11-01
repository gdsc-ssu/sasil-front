import { PostType } from 'src/constants';
import { getAsync, ApiResult } from './apiUtils';
import { InfResultType, SortType } from './posts';
import { PostListType } from './post';

export type SearchType = 'tag' | 'query';

/**
 * 검색 종류, 게시물 종류, 키워드에 따른 검색 결과 반환하는 함수
 * @param postType 게시물 종류 (experiment | request)
 * @param searchType 검색 종류 (query | tag)
 * @param keyword 검색어
 * @param page page number
 * @param display 게시물 개수
 * @param sort 정렬 기준 (recent | popular)
 *
 */
export const getSearchPostsAsync = async (
  postType: PostType,
  searchType: SearchType,
  keyword: string,
  page: number,
  display: number,
  sort: SortType,
): ApiResult<InfResultType<PostListType[]>> => {
  const response = await getAsync<PostListType[], any>(
    `/search/${searchType}/${postType}`,
    { params: { page, display, sort, tag: keyword, query: keyword } }, // TODO: 백엔드 url 수정 계획 (query, tag 부분을 통일)
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
