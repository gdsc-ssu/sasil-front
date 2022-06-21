import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrap = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '1284px',
  ' > .mini-card': {
    margin: '7px',
  },

  [`@media screen and (max-width:1330px)`]: {
    width: '1200px',
    '.mini-card:nth-child(n+11)': {
      display: 'none',
    },
  },
  [`@media screen and (max-width:1100px)`]: {
    width: '1000px',
    '.mini-card:nth-child(n+9)': {
      display: 'none',
    },
  },
  [`@media screen and (max-width:870px)`]: {
    width: '800px',
    '.mini-card:nth-child(n+7)': {
      display: 'none',
    },
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    // TODO 미니카드 스타일 적용
  },
});
