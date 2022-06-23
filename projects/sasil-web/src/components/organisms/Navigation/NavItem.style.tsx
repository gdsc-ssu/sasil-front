import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

export const StyledNavItem = styled.li({
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

  '&.focused': {
    stroke: COLORS.primary.normal,
    fill: COLORS.primary.normal,
  },

  '& .nav-name': {
    display: 'none',
  },

  ':hover': {
    stroke: COLORS.primary.alpha20,
    fill: COLORS.primary.alpha20,

    '& .nav-name': {
      color: COLORS.primary.alpha20,
    },
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '74px',
    height: '59px',
    borderTop: `2px solid transparent`,

    '&.focused': {
      borderTop: `2px solid ${COLORS.primary.normal}`,
    },

    '& .nav-name': {
      display: 'block',
    },
  },
});

export const LinkBox = styled.a({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',

  ':visited': {
    fill: 'inherit',
  },
});

export const IconWrap = styled.div({
  width: '24px',
  height: '24px',
  marginBottom: '3px',
});
