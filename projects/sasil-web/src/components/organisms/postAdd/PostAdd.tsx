import { useState } from 'react';
import { useRouter } from 'next/router';
import { COLORS } from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';

import Plus from '@/assets/icons/Plus.svg';
import Request from '@/assets/icons/Request.svg';
import Experiment from '@/assets/icons/Experiment.svg';

import * as styles from './PostAdd.style';

const PostAdd = () => {
  // TODO listItem 누르면 게시물 작성 url로 이동하기
  const router = useRouter();
  const [isListOpened, setIsListOpened] = useState(false);
  return (
    <styles.Wrap>
      {isListOpened && (
        <styles.ListWrap>
          <styles.ListItem>
            <Experiment width={24} />
            <StyledText
              textStyleName="body2B"
              color={COLORS.grayscale.gray6}
              className="item-text"
            >
              실험하기
            </StyledText>
          </styles.ListItem>
          <styles.ListItem>
            <Request width={24} />
            <StyledText
              textStyleName="body2B"
              color={COLORS.grayscale.gray6}
              className="item-text"
            >
              의뢰하기
            </StyledText>
          </styles.ListItem>
        </styles.ListWrap>
      )}
      <styles.ButtonWrap>
        <styles.Button
          className={isListOpened ? 'list-opened' : ''}
          onClick={() => setIsListOpened(!isListOpened)}
        >
          <Plus
            fill={isListOpened ? COLORS.primary.normal : COLORS.grayscale.white}
            className={isListOpened ? 'list-opened-icon' : ''}
          />
        </styles.Button>
      </styles.ButtonWrap>
    </styles.Wrap>
  );
};

export default PostAdd;
