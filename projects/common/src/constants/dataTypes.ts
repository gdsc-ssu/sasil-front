export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  login_type: string;
  nickname: string;
  profile?: string;
}
