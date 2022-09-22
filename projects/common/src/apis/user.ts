import { getAsync, postAsync, ApiResult, deleteAsync } from './apiUtils';
import { UserType, PostType } from '../constants/dataTypes';
import { InfResultType } from './posts';
import { PostListType } from './post';

type GetUserAsyncOutput = UserType;

interface EditProfileImgAsyncInput {
  profileImg: string | undefined;
}

interface EditNicknameAsyncInput {
  nickname: string;
}

/**
 * 내 정보 조회
 * @param token JWT 토큰
 * @returns `User`
 */
export async function getUser(token: string): ApiResult<GetUserAsyncOutput> {
  interface GetUserAsyncInput {
    Authorization: string;
  }

  const result = await getAsync<GetUserAsyncOutput, GetUserAsyncInput>(
    '/user/me',
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
}

/**
 * 회원 탈퇴
 * @param token 소셜 로그인으로 받은 토큰
 */
export async function deleteUser(token: string): ApiResult<undefined> {
  const result = await deleteAsync<undefined, any>('/user/me', {
    headers: {
      Authorization: token,
    },
  });

  return result;
}

/**
 * 유저 정보 조회
 * @param userId 유저 id값
 * @returns `User`
 */
export async function getUserByIdAsync(
  userId: number,
): ApiResult<GetUserAsyncOutput> {
  const result = await getAsync<GetUserAsyncOutput, any>(`/user/${userId}`);

  return result;
}

/**
 * 유저가 작성한 게시물 목록 조회
 * @param userId 유저 id값
 * @param postType 게시물 타입
 * @param page page number
 * @param display 게시물 개수
 */
export const getUserWritePostListAsync = async (
  userId: number,
  postType: PostType,
  page: number,
  display: number,
): ApiResult<InfResultType<PostListType[]>> => {
  const response = await getAsync<PostListType[], any>(
    `/user/${userId}/posts/${postType}`,
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
 * 유저가 북마크한 게시물 목록 조회
 * @param userId 유저 id값
 * @param postType 게시물 타입
 * @param page page number
 * @param display 게시물 개수
 */
export const getUserBookmarkPostListAsync = async (
  userId: number,
  postType: PostType,
  page: number,
  display: number,
): ApiResult<InfResultType<PostListType[]>> => {
  const response = await getAsync<PostListType[], any>(
    `/user/${userId}/bookmark/posts/${postType}`,
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
 * 유저 프로필 이미지 수정
 * @param token 소셜 로그인으로 받은 토큰
 * @param profileImg 변경할 프로필 이미지 url
 */
export const editProfileImgAsync = async (
  token: string,
  profileImg: string | undefined,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, EditProfileImgAsyncInput>(
    `/user/profile/image`,
    {
      profileImg,
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
 * 유저 닉네임 수정
 * @param token 소셜 로그인으로 받은 토큰
 * @param nickname 변경할 닉네임
 */
export const editNicknameAsync = async (
  token: string,
  nickname: string,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, EditNicknameAsyncInput>(
    `/user/profile/nickname`,
    {
      nickname,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};
