/* eslint-disable no-undef */
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import RequestIcon from '@/assets/icons/Request';
import ExperimentIcon from '@/assets/icons/Experiment';
import CircleRightIcon from '@/assets/icons/CircleRight';
import FireIcon from '@/assets/icons/Fire';
import StyledText from '@/components/atom/StyledText';
import * as styles from './PostsWrapTitle.style';

export type titleType = 'hotRequest' | 'popExperiment' | 'popRequest';

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
  type: titleType;
}

const PostsWrapTitle = ({ type }: PostWrapTitleProps) => {
  //TODO CircleIcon 누르면 상세 페이지 이동하기
  const haveFireIcon = type === 'hotRequest';
  const alignLeft = type === 'popExperiment';
  return (
    <styles.Wrap alignLeft={alignLeft}>
      <styles.IconWrap haveFireIcon={haveFireIcon}>
        {POSTS_TITLE[type].icon}
      </styles.IconWrap>

      <StyledText
        textStyleName={TEXT_STYLE_NAME.subtitle2B}
        color={COLORS.grayscale.gray8}
        style={!alignLeft && styles.rightTitle}
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
