import { atom } from 'jotai';

export type UserInfoType = {
  id: number | null;
  profile: string | null;
  nickname: string;
  email: string;
};

export const userInfoAtom = atom<UserInfoType>({
  id: null,
  profile: null,
  nickname: '',
  email: '',
});
