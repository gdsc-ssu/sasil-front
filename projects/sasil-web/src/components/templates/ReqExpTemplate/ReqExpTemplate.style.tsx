import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

export const Container = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '64px',
  marginBottom: '0px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    marginTop: '0px',
    marginBottom: '60px',
  },
});

export const PagesWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100%',
  width: '100%',
  padding: '57px 0',
  backgroundColor: COLORS.background,

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    padding: '30px 0',
  },
});
