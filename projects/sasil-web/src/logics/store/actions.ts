import { atom } from 'jotai';
import { userInfoAtom, UserInfoType } from './atoms';

export const getUserInfoAtom = atom(
  (get) => get(userInfoAtom),
  (get, set, userData: any) => {
    const newUserInfo: UserInfoType = {
      id: userData.id,
      profile: userData.profile,
      nickname: userData.nickname,
      token: userData.token,
    };
    set(userInfoAtom, newUserInfo);
  },
);
