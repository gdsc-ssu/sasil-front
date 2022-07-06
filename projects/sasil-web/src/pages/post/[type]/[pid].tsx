import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { getPostDetailAsync, PostDetailType } from '@sasil/common';
import { comments, expPostDetail, expRequestPost } from 'src/dummyData';

// Toast Viewer를 사용하기 위한 ssr 해제
const PostDetailTemplate = dynamic(
  () => import('@/components/templates/PostDetailTemplate'),
  { ssr: false },
);

// TODO 현재는 실험 게시물 더미 데이터로 되어있음. pid에 맞게 api 연결할 것!
const PostDetail: NextPage = () => {
  const router = useRouter();
  const postType = router.query.type as 'experiment' | 'request';
  const postId = Number(router.query.pid);

  const accessToken = ''; // TODO: Jotai

  const [realPost, setRealPost] = useState({});

  useEffect(() => {
    if (!postType || !postId) {
      return;
    }

    const getInitialData = async () => {
      const postDetailData = await getPostDetailAsync(
        accessToken,
        postType,
        postId,
      );

      setRealPost((prev) =>
        postDetailData.isSuccess ? postDetailData.result : prev,
      );
    };

    getInitialData();
  }, [postId, postType, router.isReady]);

  // TODO: 로딩화면

  const onInterestPress = (buttonName: string) => {
    // switch (buttonName) {
    //   case 'like': {
    //     setRealPost((prev) => ({
    //       ...prev,
    //       likeCount: prev.isLikes ? prev.likeCount - 1 : prev.likeCount + 1,
    //       isLike: !prev.isLike,
    //     }));
    //     break;
    //   }
    //   case 'bookmark': {
    //     setRealPost((prev) => {
    //       if (Object.keys(prev).length === 0) {
    //         return prev;
    //       }
    //       return {
    //         ...prev,
    //         bookmarkCount: prev.isBookmark
    //           ? prev.bookmarkCount - 1
    //           : prev.bookmarkCount + 1,
    //         isBookmark: !prev.isBookmark,
    //       };
    //     });
    //     break;
    //   }
    //   default:
    //     break;
    // }
  };

  // if (Object.keys(realPost).length === 0) {
  //   return <>test</>;
  // }

  return (
    <PostDetailTemplate
      type={postType}
      post={realPost as PostDetailType}
      relativePosts={expRequestPost}
      onInterestPress={onInterestPress}
    />
  );
};

export default PostDetail;
