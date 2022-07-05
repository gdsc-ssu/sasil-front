import { postAsync, ApiResult } from './apiUtils';

export const LOGIN_TYPE = {
  googleWeb: 'google-web',
  googleMobile: 'google-mobile',
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
 * @returns `{token: JWT 토큰}`
 */
export async function loginAsync(
  loginType: LoginType,
  token: string,
): ApiResult<LoginAsyncOutput> {
  const result = await postAsync<LoginAsyncOutput, any>(
    `/auth/login/${loginType}`,
    undefined,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
}
