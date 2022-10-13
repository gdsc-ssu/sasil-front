import SearchTemplate, {
  PostType,
  SearchType,
} from '@/components/templates/SearchTemplate';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { expPosts, reqPosts } from 'src/dummyData';

const Search: NextPage = () => {
  const router = useRouter();
  const { keyword, stype, ptype } = router.query;

  return (
    <SearchTemplate
      keyword={keyword as string | undefined}
      stype={stype as SearchType}
      ptype={ptype as PostType}
      expResPost={expPosts}
      reqResPost={reqPosts}
    />
  );
};

export default Search;
