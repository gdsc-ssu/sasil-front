import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from '@sasil/common';

export const styledNavItem = styled.li({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '34px',
  maxWidth: '20%',
  stroke: COLORS.grayscale.gray5,
  fill: COLORS.grayscale.gray5,
  cursor: 'pointer',

  '&.on': {
    stroke: COLORS.primary.normal,
    fill: COLORS.primary.normal,
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '74px',
    height: '59px',

    '&.on': {
      borderTop: `2px solid ${COLORS.primary.normal}`,
    },
  },
});

export const iconWrap = styled.div({
  width: '24px',
  height: '24px',
  marginBottom: '3px',
});
