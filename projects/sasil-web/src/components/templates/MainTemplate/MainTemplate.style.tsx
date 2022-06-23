import { COLORS } from '@sasil/common';
import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

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

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    padding: '0px 20px',
    paddingBottom: '47px',
  },
});

export const Posts = styled.div({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflowX: 'scroll',
});

export const IconWrap = styled.div({
  margin: '88px auto',
});

export const PostWriteNavWrap = styled.div({
  position: 'fixed',
  right: '30px',
  bottom: '40px',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    right: '7px',
    bottom: '70px',
  },
});

export const ViewMoreButton = styled.div({
  display: 'none',
  height: '50px',
  width: '100%',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
