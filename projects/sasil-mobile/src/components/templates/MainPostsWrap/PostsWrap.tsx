import PostCard from '@/components/organisms/PostCard';
import PostsWrapTitle, { POSTS_TITLE, titleType } from './PostsWrapTitle';
import * as styles from './PostsWrap.style';

export interface PostWrapProps {
  posts: any;
  type: titleType;
}

const MainPostsWrap = ({ posts, type }: PostWrapProps) => (
  <styles.Wrap>
    {posts.slice().map((post: any, index: number) =>
      index === POSTS_TITLE[type].index ? (
        <>
          <styles.Item>
            <PostsWrapTitle type={type} />
          </styles.Item>
          <styles.Item>
            <PostCard
              type={POSTS_TITLE[type].postType}
              title={post.title}
              likeCount={post.likeCount}
              thumbnail={post.thumbnail}
              writerObj={post.user}
            />
          </styles.Item>
        </>
      ) : (
        <styles.Item>
          <PostCard
            type={POSTS_TITLE[type].postType}
            title={post.title}
            likeCount={post.likeCount}
            thumbnail={post.thumbnail}
            writerObj={post.user}
          />
        </styles.Item>
      ),
    )}
  </styles.Wrap>
);

export default MainPostsWrap;
