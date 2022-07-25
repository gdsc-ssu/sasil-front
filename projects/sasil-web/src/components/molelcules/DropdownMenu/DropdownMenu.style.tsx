import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const MenuWrap = styled.div(
  ({ top, left }: { top: number; left: number }) => ({
    position: 'absolute',
    top,
    left,
    zIndex: 1,
  }),
);

export const Menu = styled.div({
  background: COLORS.grayscale.gray1,
  borderRadius: '5px',
  padding: '8px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const FixedBackground = styled.div({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -10,
  backgroundColor: 'transparent',
});
