export interface ReturnType {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
}

export async function testFetch(userId: number) {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const result: ReturnType = await response.json();
  return result;
}
