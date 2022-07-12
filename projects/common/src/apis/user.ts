import { getAsync, ApiResult, deleteAsync } from './apiUtils';
import { UserType } from '../constants/dataTypes';

type GetUserAsyncOutput = UserType;

/**
 * JWT 토큰으로 유저 정보를 받아오는 함수
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
