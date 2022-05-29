import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

export const styledNavigation = styled.ul({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '216px',
  height: '24px',
  listStyle: 'none',
  padding: '0',
  margin: '0',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '100%',
    height: '59px',
  },
});
