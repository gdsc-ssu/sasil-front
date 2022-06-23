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

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '1000px',
    ' > .mini-card': {
      margin: '4px',
    },
  },
});
