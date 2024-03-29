import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const MenuWrap = styled.div(({ top }: { top: number }) => ({
  position: 'absolute',
  top,
  right: 10,
  zIndex: 10,
}));

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

export const MenuItem = styled.div({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  margin: '4px 0px',
  '.menu-text': {
    marginLeft: '7px',
  },
  color: COLORS.grayscale.gray7,
  '&:hover': {
    color: COLORS.primary.normal,
    '.menu-text': {
      color: COLORS.primary.normal,
    },
  },
});
