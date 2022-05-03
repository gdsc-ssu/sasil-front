import { getAsync, ApiResult } from './apiUtils';
import { User } from '../constants/dataTypes';

type GetUserAsyncOutput = User;
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
