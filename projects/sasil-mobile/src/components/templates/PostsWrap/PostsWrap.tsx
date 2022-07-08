import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PostListType } from '@sasil/common';

import PostCard from '@/components/organisms/PostCard';
import * as styles from './PostsWrap.style';

export interface PostsWrapProps {
  posts: PostListType[];
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
  const navigation = useNavigation();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<PostListType>) => (
      <PostCard
        type={type}
        title={item.title}
        likeCount={item.likeCount}
        thumbnail={item.thumbnail}
        writerObj={item.user}
        onPress={() =>
          navigation.navigate('PostDetail', {
            id: item.id,
            type,
          })
        }
        style={styles.item}
        key={item.id}
      />
    ),
    [type, navigation],
  );

  const onEndReached = useCallback(async () => {
    await fetchNextPage?.();
  }, [fetchNextPage]);

  const keyExtractor = useCallback((item: PostListType) => `${item.id}`, []);

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
