import { atom } from 'jotai';
import { userInfoAtom, UserInfoType } from '../atoms';

export const createUserInfoAtom = atom(
  (get) => get(userInfoAtom),
  (get, set, userObj: any) => {
    const newUserInfo: UserInfoType = {
      id: userObj.id,
      profile: userObj.profile,
      nickname: userObj.nickname,
      email: userObj.email,
    };
    set(userInfoAtom, newUserInfo);
  },
);
