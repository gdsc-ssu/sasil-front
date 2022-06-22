import { COLORS } from '@sasil/common';
import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '.exp': {
    backgroundColor: COLORS.grayscale.white,
  },
});

export const Content = styled.div({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: COLORS.background,
  padding: '47px',
  overflowX: 'scroll',
});

export const IconWrap = styled.div({
  margin: '88px auto',
});

export const PostWriteNavWrap = styled.div({
  position: 'fixed',
  right: '30px',
  bottom: '40px',
});
