import SearchTemplate, {
  PostType,
  SearchType,
} from '@/components/templates/SearchTemplate';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { expPosts, reqPosts } from 'src/dummyData';

const Search: NextPage = () => {
  const router = useRouter();
  const { keyword, searchType, postType } = router.query;

  return (
    <SearchTemplate
      keyword={keyword as string | undefined}
      searchType={searchType as SearchType}
      postType={postType as PostType}
      expResPost={expPosts}
      reqResPost={reqPosts}
    />
  );
};

export default Search;
