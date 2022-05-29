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

export type NavItemType = keyof typeof NAV_INFO;

export interface InfoType {
  type: NavItemType;
  name: string;
}
