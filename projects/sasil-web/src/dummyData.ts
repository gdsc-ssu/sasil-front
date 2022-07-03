import { CategoryType, PostInfoType } from '@sasil/common';

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

export const expPosts: PostInfoType[] = [
  {
    id: 1,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost1',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 2,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost2',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 3,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost3',
    thumbnail: null,
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 4,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail: null,
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 5,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 6,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail: null,
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 7,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 8,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 9,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 10,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[0],
    categories: [],
    likeCount: 9,
  },
  {
    id: 11,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail: null,
    user: users[0],
    categories: [],
    likeCount: 9,
  },
];

export const reqPosts: PostInfoType[] = [
  {
    id: 1,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost1',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'answered',
    likeCount: 25,
  },
  {
    id: 2,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'wait',
    likeCount: 25,
  },
  {
    id: 3,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'wait',
    likeCount: 25,
  },
  {
    id: 4,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'wait',
    likeCount: 25,
  },
  {
    id: 5,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'answered',
    likeCount: 25,
  },
  {
    id: 6,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'wait',
    likeCount: 25,
  },
  {
    id: 7,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'answered',
    likeCount: 25,
  },
  {
    id: 8,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'wait',
    likeCount: 25,
  },
  {
    id: 9,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'wait',
    likeCount: 25,
  },
  {
    id: 10,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'answered',
    likeCount: 25,
  },
  {
    id: 11,
    created_at: new Date('2022-05-19T14:53:43.044Z'),
    updated_at: new Date('2022-05-19T14:53:43.044Z'),
    title: 'testPost',
    thumbnail:
      'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
    user: users[1],
    categories: [],
    state: 'wait',
    likeCount: 25,
  },
];

export const categories: CategoryType[] = [
  { id: 1, name: '프론트엔드' },
  { id: 2, name: '백엔드' },
  { id: 3, name: 'Javascript' },
  { id: 4, name: 'Typescript' },
  { id: 5, name: 'HTML' },
  { id: 6, name: 'CSS' },
  { id: 7, name: 'Storybook' },
];
