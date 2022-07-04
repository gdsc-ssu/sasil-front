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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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
    bookmarkCount: 25,
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

export const reqPostDetail = {
  id: 9,
  created_at: new Date('2022-05-19T14:53:43.044Z'),
  updated_at: new Date('2022-05-19T14:53:43.044Z'),
  user: users[1],
  title: '게시물 제목 예시입니다',
  thumbnail:
    'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
  content:
    '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>',
  likeCount: 9,
  bookmarkCount: 25,
  liked: false,
  bookmarked: false,
  categories: [
    { name: '카테고리1', id: 1 },
    { name: '카테고리2', id: 2 },
    { name: '카테고리3', id: 3 },
  ],
  comments: [
    {
      id: 1,
      writerObj: { nickname: '작성자1', profileImg: null },
      content: '안녕하세요 댓글이에요 1',
    },
    {
      id: 2,
      writerObj: { nickname: '작성자2', profileImg: null },
      content: '안녕하세요  댓글이에요 2',
    },
    {
      id: 3,
      writerObj: { nickname: '작성자3', profileImg: null },
      content: '안녕하세요  댓글이에요 3',
    },
    {
      id: 4,
      writerObj: { nickname: '작성자4', profileImg: null },
      content: '안녕하세요  댓글이에요 4',
    },
  ],
};

export const reqAnswerPosts = [
  {
    id: 1,
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
];

export const expPostDetail = {
  id: 9,
  created_at: new Date('2022-05-19T14:53:43.044Z'),
  updated_at: new Date('2022-05-19T14:53:43.044Z'),
  user: users[1],
  title: '게시물 제목 예시입니다',
  thumbnail:
    'https://image.shutterstock.com/image-photo/cute-labrador-dog-playing-stick-600w-1935251336.jpg',
  content:
    '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>',
  likeCount: 9,
  bookmarkCount: 25,
  liked: false,
  bookmarked: false,
  categories: [
    { name: '카테고리1', id: 1 },
    { name: '카테고리2', id: 2 },
    { name: '카테고리3', id: 3 },
  ],
  comments: [
    {
      id: 1,
      writerObj: { nickname: '작성자1', profileImg: null },
      content: '안녕하세요 댓글이에요 1',
    },
    {
      id: 2,
      writerObj: { nickname: '작성자2', profileImg: null },
      content: '안녕하세요  댓글이에요 2',
    },
    {
      id: 3,
      writerObj: { nickname: '작성자3', profileImg: null },
      content: '안녕하세요  댓글이에요 3',
    },
    {
      id: 4,
      writerObj: { nickname: '작성자4', profileImg: null },
      content: '안녕하세요  댓글이에요 4',
    },
  ],
};

export const expRequestPost = [
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
    bookmarkCount: 25,
  },
];
