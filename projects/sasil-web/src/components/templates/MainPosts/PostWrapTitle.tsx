/* eslint-disable no-undef */
import { useRouter } from 'next/router';
import StyledText from '@/components/atoms/StyledText';
import { TEXT_STYLE_NAME } from '@sasil/common';

import CircleRight from '@/assets/icons/CircleRight.svg';
import Fire from '@/assets/icons/Fire.svg';
import Experiment from '@/assets/icons/Experiment.svg';
import Request from '@/assets/icons/Request.svg';

import * as styles from './PostWrapTitle.style';

export const TITLE = {
  hotRequest: 'hotRequest',
  popExperiment: 'popExperiment',
  popRequest: 'popRequest',
} as const;
export type titleType = typeof TITLE[keyof typeof TITLE];

export type postTitleProps = {
  [key in titleType]: {
    icon: JSX.Element;
    title: string;
    index: number;
    postType: 'request' | 'experiment';
  };
};

export const POSTS_TITLE: postTitleProps = {
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

export interface PostWrapTitleProps {
  type: titleType;
}

const PostWrapTitle = ({ type }: PostWrapTitleProps) => {
  const router = useRouter();
  const handleRouter = () => {
    router.push(`/${POSTS_TITLE[type].postType}`);
  };
  return (
    <styles.Title>
      {POSTS_TITLE[type].icon}
      <StyledText textStyleName={TEXT_STYLE_NAME.subtitle2B}>
        {POSTS_TITLE[type].title}
      </StyledText>
      <styles.Icon onClick={handleRouter}>
        <CircleRight />
      </styles.Icon>
    </styles.Title>
  );
};

export default PostWrapTitle;
