import { atom } from 'jotai';

export type UserInfoType = {
  id: number | null;
  profileImg: string | null;
  nickname: string | null;
  token: string | null;
};

export const userInfoAtom = atom<UserInfoType>({
  id: null,
  profileImg: null,
  nickname: null,
  token: null,
});
