import { atom } from 'jotai';

export const tokenAtom = atom('');

export type UserInfoType = {
  id: number | null;
  profile: string | null;
  nickname: string | null;
};

export const userInfoAtom = atom<UserInfoType>({
  id: null,
  profile: null,
  nickname: null,
});
