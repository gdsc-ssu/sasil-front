import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

// toast-edtior를 사용하기 위한 ssr 해제
const PostWriteTemplate = dynamic(
  () => import('@/components/templates/PostWriteTemplate'),
  { ssr: false },
);

const PostWrite: NextPage = () => <PostWriteTemplate />;

export default PostWrite;
