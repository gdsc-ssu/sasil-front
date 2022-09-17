import styled from '@emotion/styled';

import { COLORS, TEXT_STYLES_MOBILE } from '@sasil/common';

import { MEDIA_QUERIES } from '@/constants/styles';

export const SwitchButtonWrapped = styled.button({
  position: 'relative',
  border: 0,
  background: 'transparent',
});

export const StyledBackground = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
  height: '40px',
  borderRadius: '20px',
  backgroundColor: COLORS.grayscale.white,
  cursor: 'pointer',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '140px',
    height: '30px',
  },
});

export const BackgroundLabel = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100px',
  height: '40px',
  borderRadius: '20px',
  backgroundColor: COLORS.grayscale.white,

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '70px',
    height: '30px',

    '& > .switch-btn-label': {
      fontFamily: TEXT_STYLES_MOBILE.body2B.fontFamily,
      fontSize: TEXT_STYLES_MOBILE.body2B.fontSize,
      fontWeight: TEXT_STYLES_MOBILE.body2B.fontWeight,
      lineHeight: `${TEXT_STYLES_MOBILE.body2B.lineHeight}px`,
    },
  },

  '.focused': {
    color: COLORS.primary.normal,
  },
});

interface StyledMoveBtnProps {
  isLeft: boolean;
}

export const StyledMoveBtn = styled.div(({ isLeft }: StyledMoveBtnProps) => ({
  top: '0',
  transform: isLeft ? 'translateX(0)' : 'translateX(100px)',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100px',
  height: '40px',
  borderRadius: '20px',
  backgroundColor: COLORS.primary.alpha20,
  cursor: 'pointer',
  transition: 'all 0.1s ease-in',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    transform: isLeft ? 'translateX(0)' : 'translateX(70px)',
    width: '70px',
    height: '30px',
  },
}));
