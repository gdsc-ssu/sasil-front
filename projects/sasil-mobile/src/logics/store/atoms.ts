import { atom } from 'jotai';

export type UserInfoType = {
  id: number | null;
  profile: string | null;
  nickname: string | null;
  email: string | null;
};

export const userInfoAtom = atom<UserInfoType>({
  id: null,
  profile: null,
  nickname: null,
  email: null,
});
