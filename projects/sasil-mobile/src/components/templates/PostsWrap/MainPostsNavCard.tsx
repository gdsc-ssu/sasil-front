/* eslint-disable no-undef */
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import { useNavigation } from '@react-navigation/native';
import RequestIcon from '@/assets/icons/Request';
import ExperimentIcon from '@/assets/icons/Experiment';
import CircleRightIcon from '@/assets/icons/CircleRight';
import FireIcon from '@/assets/icons/Fire';
import StyledText from '@/components/atom/StyledText';

import * as styles from './MainPostsNavCard.style';

export type postsTitleType = 'hotRequest' | 'popExperiment' | 'popRequest';

export type postTitleProps = {
  [key in postsTitleType]: {
    icon: JSX.Element;
    title: string;
    index: number;
    postType: 'request' | 'experiment';
  };
};

export const POSTS_INFO: postTitleProps = {
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
export interface MainPostsNavCardProps {
  /** PostsWrap의 종류. 핫한 의뢰, 인기 의뢰, 인기 실험 중 하나. */
  type: postsTitleType;
  /** 추가 style 적용을 위한 css 객체 */
  style?: any;
}

/**
 * PostsWrap의 제목을 나타내고 의뢰 및 실험 페이지로 이동시키는 컴포넌트.
 */
const MainPostsNavCard = ({ type, style }: MainPostsNavCardProps) => {
  const navigation = useNavigation();
  const haveFireIcon = type === 'hotRequest';
  const alignRight = type !== 'popExperiment';

  return (
    <styles.Wrap
      alignRight={alignRight}
      style={style}
      onPress={() => {
        navigation.navigate(
          POSTS_INFO[type].postType === 'request' ? 'Request' : 'Experiment',
        );
      }}
    >
      <styles.IconWrap haveFireIcon={haveFireIcon}>
        {POSTS_INFO[type].icon}
      </styles.IconWrap>
      <StyledText
        textStyleName={TEXT_STYLE_NAME.subtitle2B}
        color={COLORS.grayscale.gray8}
        style={alignRight && styles.rightTitle}
      >
        {POSTS_INFO[type].title}
      </StyledText>
      <styles.CircleIconWrap>
        <CircleRightIcon />
      </styles.CircleIconWrap>
    </styles.Wrap>
  );
};

export default MainPostsNavCard;
