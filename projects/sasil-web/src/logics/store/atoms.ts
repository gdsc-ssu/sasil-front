import { atomWithStorage } from 'jotai/utils';

export type UserInfoType = {
  id: number | null;
  profile: string | null;
  nickname: string | null;
  token: string | null;
};

export const userInfoAtom = atomWithStorage<UserInfoType | null>('userInfo', {
  id: null,
  profile: null,
  nickname: null,
  token: null,
});
