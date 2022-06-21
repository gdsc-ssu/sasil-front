import React, { useState } from 'react';
import Plus from '@/assets/icons/Plus';
import Experiment from '@/assets/icons/Experiment';
import Request from '@/assets/icons/Request';
import { COLORS } from '@sasil/common';
import StyledText from '@/components/atom/StyledText';
import * as styles from './PostWriteNav.style';

const PostWriteNav = () => {
  const [listOpened, setListOpened] = useState(false);
  const handleListOpen = () => setListOpened(!listOpened);
  return (
    <styles.Wrap>
      {listOpened && (
        <styles.ListWrap>
          <styles.ItemWrap>
            <styles.IconWrap>
              <Experiment color={COLORS.grayscale.gray6} />
            </styles.IconWrap>

            <StyledText textStyleName="body1B" color={COLORS.grayscale.gray6}>
              실험하기
            </StyledText>
          </styles.ItemWrap>
          <styles.ItemWrap>
            <styles.IconWrap>
              <Request color={COLORS.grayscale.gray6} />
            </styles.IconWrap>

            <StyledText textStyleName="body1B" color={COLORS.grayscale.gray6}>
              의뢰하기
            </StyledText>
          </styles.ItemWrap>
        </styles.ListWrap>
      )}
      <styles.Button
        onPress={handleListOpen}
        color={listOpened ? COLORS.grayscale.white : COLORS.primary.normal}
      >
        <styles.Icon listOpened={listOpened}>
          <Plus
            color={listOpened ? COLORS.primary.normal : COLORS.grayscale.white}
          />
        </styles.Icon>
      </styles.Button>
    </styles.Wrap>
  );
};

export default PostWriteNav;
