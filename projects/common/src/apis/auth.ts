import { postAsync, ApiResult } from './apiUtils';

export const LOGIN_TYPE = {
  google: 'google',
  kakao: 'kakao',
  appleWeb: 'apple-web',
  appleMobile: 'apple-mobile',
} as const;
export type LoginType = typeof LOGIN_TYPE[keyof typeof LOGIN_TYPE];

interface LoginAsyncOutput {
  token: string;
}
/**
 * 소셜 로그인 토큰으로 JWT 토큰을 받는 함수
 * @param loginType 소셜 로그인 타입
 * @param token 소셜 로그인으로 받은 토큰
 */
export async function loginAsync(
  loginType: LoginType,
  token: string,
): ApiResult<LoginAsyncOutput> {
  interface LoginAsyncInput {
    Authorization: string;
  }

  const result = await postAsync<LoginAsyncOutput, LoginAsyncInput>(
    `/auth/login/${loginType}`,
    { Authorization: token },
  );

  return result;
}
