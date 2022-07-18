import { atom } from 'jotai';
import { userInfoAtom, UserInfoType } from './atoms';

export const createUserInfoAtom = atom(
  (get) => get(userInfoAtom),
  (get, set, userData: any) => {
    const newUserInfo: UserInfoType = {
      id: userData.id,
      profileImg: userData.profileImg,
      nickname: userData.nickname,
      token: userData.token,
    };
    set(userInfoAtom, newUserInfo);
  },
);
