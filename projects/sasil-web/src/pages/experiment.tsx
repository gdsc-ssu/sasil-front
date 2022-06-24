import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { getPostsAsync, SortType } from '@sasil/common';

import { categories, expPosts } from 'src/dummyData';
import ReqExpTemplate from '@/components/templates/ReqExpTemplate';

const ExperimentPage: NextPage = () => {
  const router = useRouter();

  const pageType = 'experiment';
  const sortType = (router?.query?.sort || 'recent') as SortType;
  const display = 12;

  return (
    <ReqExpTemplate type={pageType} posts={expPosts} categories={categories} />
  );
};

export default ExperimentPage;
