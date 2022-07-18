import { useState } from 'react';
import { useRouter } from 'next/router';
import { COLORS } from '@sasil/common';
import { getUserInfoAtom } from '@/logics/store/actions';
import { useAtom } from 'jotai';
import StyledText from '@/components/atoms/StyledText';

import Plus from '@/assets/icons/Plus.svg';
import Request from '@/assets/icons/Request.svg';
import Experiment from '@/assets/icons/Experiment.svg';
import * as styles from './PostWriteNav.style';

interface ListItemProps {
  type: 'request' | 'experiment';
  onClick: () => void;
}

/**
 *  PostWriteNav 내부에서 Nav 정보를 나타내는 컴포넌트.
 */
const ListItem = ({ type, onClick }: ListItemProps) => (
  <styles.ListItem onClick={onClick}>
    {type === 'request' ? <Request width={24} /> : <Experiment width={24} />}
    <StyledText
      textStyleName="body2B"
      color={COLORS.grayscale.gray6}
      className="item-text"
    >
      {type === 'request' ? '의뢰하기' : '실험하기'}
    </StyledText>
  </styles.ListItem>
);

/**
 *  버튼 누르면 실험 및 의뢰 게시물 작성 페이지로 넘어가는 컴포넌트
 */
const PostWriteNav = () => {
  // TODO listItem 누르면 게시물 작성 url로 이동하기
  const router = useRouter();
  const [listOpened, setListOpened] = useState(false);
  const handleListOpen = () => setListOpened(!listOpened);
  const [userInfo] = useAtom(getUserInfoAtom);

  return (
    <styles.Wrap>
      {listOpened && (
        <styles.ListWrap>
          <ListItem
            type="request"
            onClick={() =>
              router.push(userInfo?.token ? '/write/request' : '/login')
            }
          />
          <ListItem
            type="experiment"
            onClick={() =>
              router.push(userInfo?.token ? '/write/experiment' : '/login')
            }
          />
        </styles.ListWrap>
      )}

      <styles.Button
        color={listOpened ? COLORS.grayscale.white : COLORS.primary.normal}
        onClick={handleListOpen}
      >
        <Plus
          fill={listOpened ? COLORS.primary.normal : COLORS.grayscale.white}
          transform={listOpened ? 'rotate(45)' : ''}
        />
      </styles.Button>
    </styles.Wrap>
  );
};

export default PostWriteNav;
