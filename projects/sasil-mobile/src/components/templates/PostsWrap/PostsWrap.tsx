import { PostInfoType } from '@sasil/common';

import PostCard from '@/components/organisms/PostCard';
import * as styles from './PostsWrap.style';

export interface PostsProps {
  posts: PostInfoType[];
  type: 'request' | 'experiment';
}

// TODO: flat list
const Posts = ({ posts, type }: PostsProps) => (
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

export default Posts;
