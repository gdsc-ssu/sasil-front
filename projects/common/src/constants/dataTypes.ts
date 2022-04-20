export interface User {
  id: number;
  created_at: string;
  updated_at: string;
  email: string;
  login_type: string;
  nickname: string;
  profile?: string;
}
