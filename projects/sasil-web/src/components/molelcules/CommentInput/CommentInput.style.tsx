import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div({
  maxWidth: '615px',
  height: '48px',
  background: COLORS.background,
  borderRadius: '20px',
  paddingLeft: '24px',
  paddingRight: '50px',
  position: 'relative',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '90%',
    height: '35px',
    paddingRight: '15px',
    background: COLORS.grayscale.white,
  },
});

export const IconWrap = styled.div({
  position: 'absolute',
  width: '24px',
  height: '24px',
  top: '12px',
  right: '24px',
  marginLeft: '30px',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    top: '5px',
    right: '-30px',
  },
});
