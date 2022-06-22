/* eslint-disable no-undef */
import { useRouter } from 'next/router';
import StyledText from '@/components/atoms/StyledText';
import { TEXT_STYLE_NAME } from '@sasil/common';

import CircleRight from '@/assets/icons/CircleRight.svg';
import Fire from '@/assets/icons/Fire.svg';
import Experiment from '@/assets/icons/Experiment.svg';
import Request from '@/assets/icons/Request.svg';

import * as styles from './MainPostsNavCard.style';

export type postsTitleType = 'hotRequest' | 'popExperiment' | 'popRequest';

export type postsInfoType = {
  [key in postsTitleType]: {
    icon: JSX.Element;
    title: string;
    index: number;
    postType: 'request' | 'experiment';
  };
};

export const POSTS_INFO: postsInfoType = {
  hotRequest: {
    icon: <Fire />,
    title: '답변을 기다리는 HOT한 의뢰',
    index: 2,
    postType: 'request',
  },
  popExperiment: {
    icon: <Experiment width={40} height={40} />,
    title: '인기 실험',
    index: 1,
    postType: 'experiment',
  },
  popRequest: {
    icon: <Request width={40} height={40} />,
    title: '인기 의뢰',
    index: 3,
    postType: 'request',
  },
};

export interface MainPostsNavCardProps {
  /** PostsWrap의 제목으로 '핫한 의뢰', '인기 의뢰', '인기 실험' 중 하나. */
  type: postsTitleType;
}

/**
 *  메인 페이지에서 각 PostsWrap들의 제목을 나타내고 실험 및 의뢰 상세 페이지로 이동시키는 컴포넌트
 */
const MainPostsNavCard = ({ type }: MainPostsNavCardProps) => {
  const router = useRouter();
  const handleRouter = () => {
    router.push(`/${POSTS_INFO[type].postType}`);
  };
  const alignLeft = type === 'popExperiment';
  return (
    <styles.Title alignLeft={alignLeft}>
      {POSTS_INFO[type].icon}
      <StyledText
        textStyleName={TEXT_STYLE_NAME.subtitle2B}
        className="title-text"
      >
        {POSTS_INFO[type].title}
      </StyledText>
      <styles.Icon onClick={handleRouter}>
        <CircleRight />
      </styles.Icon>
    </styles.Title>
  );
};

export default MainPostsNavCard;
