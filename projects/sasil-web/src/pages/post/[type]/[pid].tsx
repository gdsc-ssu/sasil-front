import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { comments, expPostDetail, expRequestPost } from 'src/dummyData';

// Toast Viewer를 사용하기 위한 ssr 해제
const PostDetailTemplate = dynamic(
  () => import('@/components/templates/PostDetailTemplate'),
  { ssr: false },
);

// TODO 현재는 실험 게시물 더미 데이터로 되어있음. pid에 맞게 api 연결할 것!
const PostDetail: NextPage = () => {
  const router = useRouter();
  const { type, pid } = router.query;

  const [commentValue, setCommentValue] = useState('');
  const [realPost, setRealPost] = useState(expPostDetail);

  const onInterestPress = (buttonName: string) => {
    switch (buttonName) {
      case 'like': {
        setRealPost((prev) => ({
          ...prev,
          likeCount: prev.isLike ? prev.likeCount - 1 : prev.likeCount + 1,
          isLike: !prev.isLike,
        }));
        break;
      }
      case 'bookmark': {
        setRealPost((prev) => ({
          ...prev,
          bookmarkCount: prev.isBookmark
            ? prev.bookmarkCount - 1
            : prev.bookmarkCount + 1,
          isBookmark: !prev.isBookmark,
        }));
        break;
      }
      default:
        break;
    }
  };
  const onCommentTextChange = useCallback((text: string) => {
    setCommentValue(text);
  }, []);

  return (
    <PostDetailTemplate
      type={type as 'request' | 'experiment'}
      post={realPost}
      relativePosts={expRequestPost}
      comments={comments}
      commentInputValue={commentValue}
      onCommentTextChange={onCommentTextChange}
      onInterestPress={onInterestPress}
    />
  );
};

export default PostDetail;
