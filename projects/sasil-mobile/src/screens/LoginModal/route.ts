import axios from 'axios';

axios.defaults.baseURL = 'https://api.sasil.app'; // 'http://localhost:4000';
// axios.defaults.withCredentials = true;

export const getUser = async (token: string) => {
  try {
    const response = await axios.get(`/user/me`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log('호출 실패');
  }
};

export const login = async (token: string, loginType: any) => {
  try {
    const response = await axios.post(
      `/auth/login/${loginType}`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );

    return response;
  } catch (error) {
    console.log('error!!!!!!');
  }
};
