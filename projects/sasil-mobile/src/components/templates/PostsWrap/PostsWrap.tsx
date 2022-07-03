import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { PostInfoType } from '@sasil/common';

import PostCard from '@/components/organisms/PostCard';
import * as styles from './PostsWrap.style';

export interface PostsWrapProps {
  posts: PostInfoType[];
  type: 'request' | 'experiment';
  fetchNextPage?: () => Promise<void>;
  onRefresh?: () => Promise<void>;
  isRefreshing?: boolean;
}

const PostsWrap = ({
  posts,
  type,
  fetchNextPage,
  onRefresh,
  isRefreshing,
}: PostsWrapProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<PostInfoType>) => (
      <PostCard
        type={type}
        title={item.title}
        likeCount={item.likeCount}
        thumbnail={item.thumbnail}
        writerObj={item.user}
        style={styles.item}
        key={item.id}
      />
    ),
    [type],
  );

  const onEndReached = useCallback(async () => {
    await fetchNextPage?.();
  }, [fetchNextPage]);

  const keyExtractor = useCallback((item: PostInfoType) => `${item.id}`, []);

  return (
    <FlatList
      renderItem={renderItem}
      data={posts}
      windowSize={16}
      initialNumToRender={16}
      maxToRenderPerBatch={16}
      removeClippedSubviews={false}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      horizontal={false}
      numColumns={2}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default PostsWrap;
