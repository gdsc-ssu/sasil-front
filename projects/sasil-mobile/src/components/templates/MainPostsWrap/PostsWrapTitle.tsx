/* eslint-disable no-undef */
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';

import RequestIcon from '@/assets/icons/Request';
import ExperimentIcon from '@/assets/icons/Experiment';
import CircleRightIcon from '@/assets/icons/CircleRight';
import FireIcon from '@/assets/icons/Fire';
import StyledText from '@/components/atom/StyledText';

import * as styles from './PostsWrapTitle.style';

export type postsWrapTitleType = 'hotRequest' | 'popExperiment' | 'popRequest';

export type postTitleProps = {
  [key in postsWrapTitleType]: {
    icon: JSX.Element;
    title: string;
    index: number;
    postType: 'request' | 'experiment';
  };
};

export const POSTS_TITLE: postTitleProps = {
  hotRequest: {
    icon: <FireIcon />,
    title: '답변을 기다리는 HOT한 의뢰',
    index: 3,
    postType: 'request',
  },
  popExperiment: {
    icon: <ExperimentIcon color={COLORS.grayscale.gray8} />,
    title: '인기 실험',
    index: 2,
    postType: 'experiment',
  },
  popRequest: {
    icon: <RequestIcon color={COLORS.grayscale.gray8} />,
    title: '인기 의뢰',
    index: 3,
    postType: 'request',
  },
};
export interface PostWrapTitleProps {
  /** PostsWrap의 종류. 핫한 의뢰, 인기 의뢰, 인기 실험 중 하나. */
  type: postsWrapTitleType;
  /** 추가 style 적용을 위한 css 객체 */
  style?: any;
}

/**
 * PostsWrap의 제목을 나타내고 의뢰 및 실험 페이지로 이동시키는 컴포넌트.
 */
const PostsWrapTitle = ({ type, style }: PostWrapTitleProps) => {
  // TODO CircleIcon 누르면 상세 페이지 이동하기
  const haveFireIcon = type === 'hotRequest';
  const alignRight = type !== 'popExperiment';
  return (
    <styles.Wrap alignRight={alignRight} style={style}>
      <styles.IconWrap haveFireIcon={haveFireIcon}>
        {POSTS_TITLE[type].icon}
      </styles.IconWrap>
      <StyledText
        textStyleName={TEXT_STYLE_NAME.subtitle2B}
        color={COLORS.grayscale.gray8}
        style={alignRight && styles.rightTitle}
      >
        {POSTS_TITLE[type].title}
      </StyledText>
      <styles.CircleIconWrap>
        <CircleRightIcon />
      </styles.CircleIconWrap>
    </styles.Wrap>
  );
};

export default PostsWrapTitle;
