export const NAV_INFO = {
  main: {
    name: 'Main',
    name_kr: '메인',
  },
  request: {
    name: 'Request',
    name_kr: '의뢰',
  },
  experiment: {
    name: 'Experiment',
    name_kr: '실험',
  },
  user: {
    name: 'User',
    name_kr: '내정보',
  },
} as const;

export type NavItemKey = keyof typeof NAV_INFO;
export type NavItemName = typeof NAV_INFO[keyof typeof NAV_INFO]['name'];
export type NavItemNameKR = typeof NAV_INFO[keyof typeof NAV_INFO]['name_kr'];

export interface NavInfo {
  name: NavItemName;
  name_kr: NavItemNameKR;
}
