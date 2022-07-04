// import PostDetailTemplate from '@/components/templates/PostDetailTemplate';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { expPostDetail, expRequestPost } from 'src/dummyData';

// Toast Viewer를 사용하기 위한 ssr 해제
const PostDetailTemplate = dynamic(
  () => import('@/components/templates/PostDetailTemplate'),
  { ssr: false },
);

// TODO 현재는 실험 게시물 더미 데이터로 되어있음. pid에 맞게 api 연결할 것!
const PostDetail = () => {
  const router = useRouter();
  const { type, pid } = router.query;

  const [commentValue, setCommentValue] = useState('');
  const [realPost, setRealPost] = useState(expPostDetail);

  const onInterestPress = (buttonName: string) => {
    switch (buttonName) {
      case 'like': {
        setRealPost((prev) => ({
          ...prev,
          likeCount: prev.liked ? prev.likeCount - 1 : prev.likeCount + 1,
          liked: !prev.liked,
        }));
        break;
      }
      case 'bookmark': {
        setRealPost((prev) => ({
          ...prev,
          bookmarkCount: prev.bookmarked
            ? prev.bookmarkCount - 1
            : prev.bookmarkCount + 1,
          bookmarked: !prev.bookmarked,
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
      commentInputValue={commentValue}
      onCommentTextChange={onCommentTextChange}
      onInterestPress={onInterestPress}
    />
  );
};

export default PostDetail;
