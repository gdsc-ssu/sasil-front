import { atomWithStorage } from 'jotai/utils';

export type UserInfoType = {
  id: number | null;
  profileImg: string | null;
  nickname: string | null;
  token: string | null;
};

export const userInfoAtom = atomWithStorage<UserInfoType | null>('userInfo', {
  id: null,
  profileImg: null,
  nickname: null,
  token: null,
});
