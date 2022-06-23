import React, { useState } from 'react';
import PlusIcon from '@/assets/icons/Plus';
import ExperimentIcon from '@/assets/icons/Experiment';
import RequestIcon from '@/assets/icons/Request';
import { COLORS } from '@sasil/common';
import StyledText from '@/components/atom/StyledText';
import * as styles from './PostWriteNav.style';

/**
 *
 * 게시물 작성 페이지로 바로 이동할 수 있는 컴포넌트. 원형 버튼으로 화면 하단에 항상 위치하고 있다.
 */
const PostWriteNav = () => {
  const [listOpened, setListOpened] = useState(false);
  const handleListOpen = () => setListOpened(!listOpened);
  return (
    <styles.Wrap>
      {listOpened && (
        <styles.NavList>
          <styles.NavItem>
            <styles.IconWrap>
              <ExperimentIcon color={COLORS.grayscale.gray6} />
            </styles.IconWrap>
            <StyledText textStyleName="body1B" color={COLORS.grayscale.gray6}>
              실험하기
            </StyledText>
          </styles.NavItem>
          <styles.NavItem>
            <styles.IconWrap>
              <RequestIcon color={COLORS.grayscale.gray6} />
            </styles.IconWrap>
            <StyledText textStyleName="body1B" color={COLORS.grayscale.gray6}>
              의뢰하기
            </StyledText>
          </styles.NavItem>
        </styles.NavList>
      )}
      <styles.Button
        onPress={handleListOpen}
        backgroundColor={
          listOpened ? COLORS.grayscale.white : COLORS.primary.normal
        }
      >
        <styles.ButtonIcon listOpened={listOpened}>
          <PlusIcon
            color={listOpened ? COLORS.primary.normal : COLORS.grayscale.white}
          />
        </styles.ButtonIcon>
      </styles.Button>
    </styles.Wrap>
  );
};

export default PostWriteNav;
