import { getAsync, postAsync, ApiResult } from './apiUtils';

export type StateType = 'all' | 'wait' | 'answered';

export type WriterType = {
  id: number;
  nickname: string;
  profileImg?: string | null;
};

export type CategoryType = {
  id: number;
  name: string;
};

export interface PostBasicType {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  thumbnail?: string | null;
  likeCount: number;
  user: WriterType;
}

export interface PostListType extends PostBasicType {
  categories: CategoryType[];
  state?: StateType;
}

export interface PostDetailType extends PostBasicType {
  content: string;
  bookmarkCount: number;
  isLike: boolean;
  isBookmark: boolean;
  categories: CategoryType[];
  state?: Exclude<StateType, 'all'>;
}

export interface TargetReqPostType extends PostBasicType {
  bookmarkCount: number;
}

export interface AnswerExpPostType extends PostBasicType {}

export interface ImgUploadURLType {
  imgUploadURL: string;
}

interface AddPostAsyncInput {
  title: string;
  content: string;
  thumbnail: string;
  categories: string[];
  reqId?: number;
}

/**
 * 게시물 정보 조회 (로그인 [선택])
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 */
export const getPostDetailAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  postId: number,
): ApiResult<PostDetailType> => {
  const result = await getAsync<PostDetailType, any>(
    `/post/${postType}/${postId}`,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};

/**
 * 특정 의뢰에 응답한 실험 게시물 목록 조회 (최신순)
 * @param reqId 의뢰 게시물의 id값
 */
export const getExpListByReqAsync = async (
  reqId: string,
): ApiResult<AnswerExpPostType[]> => {
  const result = await getAsync<AnswerExpPostType[], any>(
    `/post/request/${reqId}/experiments`,
  );

  return result;
};

/**
 * 특정 실험 게시물이 응답한 의뢰 게시물 정보 조회
 * @param expId 실험 게시물의 id값
 */
export const getReqPostByExpAsync = async (
  expId: string,
): ApiResult<TargetReqPostType> => {
  const result = await getAsync<TargetReqPostType, any>(
    `/post/experiment/${expId}/request`,
  );

  return result;
};

/**
 * 게시물 작성
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param title 게시물 제목
 * @param content 게시물 내용
 * @param thumbnail 게시물 썸네일
 * @param categories 게시물 카테고리 목록
 * @param reqId 실험 게시물인 경우, 수행한 의뢰 게시물 id값
 */
export const addPostAsync = async (
  token: string,
  postType: 'experiment' | 'request',
  title: string,
  content: string,
  thumbnail: string,
  categories: string[],
  reqId: number | undefined,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, AddPostAsyncInput>(
    `/post/${postType}`,
    {
      title,
      content,
      thumbnail,
      categories,
      reqId,
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
 * 이미지 업로드 URL
 * @param token 소셜 로그인으로 받은 토큰
 */
export const getImgUploadURLAsync = async (
  token: string,
): ApiResult<ImgUploadURLType> => {
  const result = await getAsync<ImgUploadURLType, any>(`/post/image`, {
    headers: {
      Authorization: token,
    },
  });

  return result;
};
