import { NextPage } from 'next';
import { useRouter } from 'next/router';

import SearchTemplate, {
  PostType,
  SearchType,
} from '@/components/templates/SearchTemplate';
import { expPosts } from 'src/dummyData';

const Search: NextPage = () => {
  const router = useRouter();
  const { keyword, stype, ptype } = router.query;

  const postType = (ptype || 'request') as PostType;
  const searchType = (stype || 'query') as SearchType;

  return (
    <SearchTemplate
      keyword={keyword as string | undefined}
      searchType={searchType}
      postType={postType}
      posts={expPosts} // TODO
    />
  );
};

export default Search;
