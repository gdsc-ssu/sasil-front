// type에 따른 URL
export const URL_INFO = {
  main: '/',
  request: '/request',
  experiment: '/experiment',
  user: '/user',
} as const;

export type UrlNameType = typeof URL_INFO[keyof typeof URL_INFO];
