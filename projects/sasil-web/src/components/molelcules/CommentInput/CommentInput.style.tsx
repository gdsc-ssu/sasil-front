import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div({
  maxWidth: '615px',
  height: '48px',
  background: COLORS.background,
  borderRadius: '20px',
  paddingLeft: '24px',
  position: 'relative',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '93%',
    height: '35px',
    background: COLORS.grayscale.white,
  },
});

export const IconWrap = styled.div({
  position: 'absolute',
  width: 24,
  height: 24,
  top: 12,
  right: 24,

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    top: 5,
    right: -30,
  },
});
