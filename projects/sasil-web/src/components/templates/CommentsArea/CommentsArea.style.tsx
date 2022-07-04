import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div({
  '.mobile-label': {
    display: 'none',
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    '.mobile-label': {
      display: 'block',
      padding: '20px 20px 0px',
    },
  },
});

export const CommentInputWrap = styled.div({
  width: '100%',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    position: 'fixed',
    bottom: 0,
    padding: '18px 16px',
    backgroundColor: COLORS.background,
  },
});

export const CommentsWrap = styled.div({
  width: '100%',
  marginTop: '32px',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    marginTop: '10px',
    marginBottom: '70px',
    padding: '0px 20px',
  },
});
