export interface UserType {
  id: number;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  profileImg: string | null;
}

export type PostType = 'experiment' | 'request';
