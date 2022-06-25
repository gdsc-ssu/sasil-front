import { useRef, useEffect, MutableRefObject, RefObject } from 'react';

type callbackFuncType = (...args: any) => any;

const useInifiniteScroll = (
  postsRef: RefObject<HTMLDivElement>,
  callbackFunc: callbackFuncType,
) => {
  // Node.js 환경에서 빌드됨으로써 생기는 오류 해결하기 위한 참조
  const observerRef: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries, curObserver) => {
        if (entries[0].isIntersecting) {
          callbackFunc(); // 여기서 전역 상태를 업데이트 해야함

          curObserver.disconnect(); // 관측 해제
        }
      },
      {
        threshold: 1,
      },
    );

    if (!postsRef.current?.lastElementChild) {
      return;
    }

    observerRef.current.observe(postsRef.current.lastElementChild);

    // TODO: understand, solve typescript error
    return () => {
      observerRef.current?.disconnect();
    };
  }, [callbackFunc, postsRef]);
};

export default useInifiniteScroll;
