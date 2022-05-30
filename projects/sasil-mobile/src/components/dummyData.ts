export const users = [
  {
    id: 1,
    nickname: 'user1',
    profile_img:
      'https://images.pexels.com/photos/9485465/pexels-photo-9485465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    id: 2,
    nickname: 'user2',
    profile_img: null,
  },
];

export const expPosts = [
  {
    id: 1,
    created_at: '',
    updated_at: '',
    title: 'testPost1',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: {},
    likeCount: 9,
  },
];

export const reqPosts = [
  {
    id: 1,
    created_at: '',
    updated_at: '',
    title: 'testPost1',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: {},
    state: '',
    likeCount: 25,
  },
];