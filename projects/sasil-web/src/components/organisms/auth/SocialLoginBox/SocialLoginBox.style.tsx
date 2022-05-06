import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '435px',
  padding: '80px 40px',
  backgroundColor: COLORS.grayscale.white,
  boxShadow: '0px 12px 50px rgba(123, 97, 255, 0.2)',
  borderRadius: '12px',
});

export const IconWrap = styled.div({
  flex: 'none',
  order: 0,
  flexGrow: 0,
  margin: '40px 0px',
});
