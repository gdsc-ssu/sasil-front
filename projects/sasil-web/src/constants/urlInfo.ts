// type에 따른 URL
export const URL_INFO = {
  Main: '/',
  Request: '/request',
  Experiment: '/experiment',
  User: '/user',
} as const;

export type UrlNameType = typeof URL_INFO[keyof typeof URL_INFO];
