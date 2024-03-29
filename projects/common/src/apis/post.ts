import { PostType } from '../constants';
import { getAsync, postAsync, deleteAsync, ApiResult } from './apiUtils';

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
  user?: WriterType;
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

export interface RelativePostType extends PostBasicType {}

export interface ImgUploadURLType {
  imgUploadURL: string;
}

interface AddPostType {
  id: number;
}

interface AddPostAsyncInput {
  title: string;
  content: string;
  thumbnail?: string;
  categories: string[];
  reqId?: number;
}

interface EditPostAsyncInput {
  title: string;
  content: string;
  thumbnail?: string;
  newCategories: string[];
  delCategories: string[];
}

/**
 * 게시물 정보 조회 (로그인 [선택])
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 */
export const getPostDetailAsync = async (
  token: string,
  postType: PostType,
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
 * 관련 게시물 목록 조회 (최신순)
 * @param postType 게시물 종류
 * @param postId 게시물의 id값
 */
export const getRelativePosts = async (
  postType: PostType,
  postId: number,
): ApiResult<RelativePostType[]> => {
  const result = await getAsync<RelativePostType[], any>(
    `/post/${postType}/${postId}/relative`,
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
  postType: PostType,
  title: string,
  content: string,
  categories: string[],
  thumbnail?: string,
  reqId?: number,
): ApiResult<AddPostType> => {
  const result = await postAsync<AddPostType, AddPostAsyncInput>(
    `/post/${postType}`,
    {
      title,
      content,
      categories,
      thumbnail,
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

/**
 * 게시물 삭제
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 */
export const deletePostAsync = async (
  token: string,
  postType: PostType,
  postId: number,
): ApiResult<undefined> => {
  const result = await deleteAsync<undefined, any>(
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
 * 게시물 수정
 * @param token 소셜 로그인으로 받은 토큰
 * @param postType 게시물 타입
 * @param postId 게시물 id값
 * @param title 게시물 제목
 * @param content 게시물 내용
 * @param newCategories 추가된 카테고리 목록
 * @param delCategories 삭제된 카테고리 목록
 * @param thumbnail 게시물 썸네일
 */
export const editPostAsync = async (
  token: string,
  postType: PostType,
  postId: number,
  title: string,
  content: string,
  newCategories: string[],
  delCategories: string[],
  thumbnail?: string,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, EditPostAsyncInput>(
    `/post/${postType}/${postId}`,
    {
      title,
      content,
      newCategories,
      delCategories,
      thumbnail,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};
