export const NAV_INFO = {
  Main: {
    type: 'Main',
    name: '메인',
  },
  Request: {
    type: 'Request',
    name: '의뢰',
  },
  Experiment: {
    type: 'Experiment',
    name: '실험',
  },
  User: {
    type: 'User',
    name: '내정보',
  },
} as const;

export type NavItemKey = keyof typeof NAV_INFO;
export type NavItemType = typeof NAV_INFO[keyof typeof NAV_INFO]['type'];
export type NavItemName = typeof NAV_INFO[keyof typeof NAV_INFO]['name'];

export interface NavInfo {
  type: NavItemType;
  name: NavItemName;
}
