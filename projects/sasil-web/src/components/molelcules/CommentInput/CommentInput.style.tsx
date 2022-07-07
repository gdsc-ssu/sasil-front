import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '615px',
  height: '48px',
  background: COLORS.background,
  borderRadius: '20px',
  padding: '0 24px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '90%',
    height: '35px',
    padding: '0 15x',
    background: COLORS.grayscale.white,
  },
});

interface IconWrapProps {
  canWrite: boolean;
}

export const IconWrap = styled.button(({ canWrite }: IconWrapProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  padding: '0',
  marginLeft: '10px',
  cursor: canWrite ? 'pointer' : 'default',
  border: 'none',
  backgroundColor: 'transparent',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    position: 'absolute',
    top: '5px',
    right: '-11%',
  },
}));
