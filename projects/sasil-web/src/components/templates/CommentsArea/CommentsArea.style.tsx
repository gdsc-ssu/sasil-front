import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div({
  position: 'relative',
  '.mobile-label': {
    display: 'none',
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    '.mobile-label': {
      display: 'block',
      padding: '20px 20px 0px',
    },
    '.comment-menu > .menu': {
      backgroundColor: COLORS.grayscale.white,
    },
  },
});

export const CommentInputWrap = styled.div({
  width: '100%',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    padding: '15px',
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

export const MenuItem = styled.div({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  margin: '3px 0px',
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
