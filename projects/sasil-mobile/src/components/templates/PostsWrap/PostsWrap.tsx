import { PostInfoType } from '@sasil/common';

import PostCard from '@/components/organisms/PostCard';
import * as styles from './PostsWrap.style';

export interface PostsWrapProps {
  posts: PostInfoType[];
  type: 'request' | 'experiment';
}

// TODO: flat list
const PostsWrap = ({ posts, type }: PostsWrapProps) => (
  <styles.Container>
    {posts.map((post: PostInfoType) => (
      <PostCard
        type={type}
        title={post.title}
        likeCount={post.likeCount}
        thumbnail={post.thumbnail}
        writerObj={post.user}
        style={styles.item}
        key={post.id}
      />
    ))}
  </styles.Container>
);

export default PostsWrap;
