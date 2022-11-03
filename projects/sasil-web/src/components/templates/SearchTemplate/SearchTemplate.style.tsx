import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Container = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  marginTop: '64px',
  marginBottom: '0px',

  '.mobile-title': {
    display: 'none',
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    margin: 0,

    '.mobile-title': {
      display: 'block',
      margin: '0px auto 30px',
    },
  },
});

export const PagesWrapper = styled.div({
  width: '100%',
  padding: '55px 20px 80px',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  background: COLORS.background,

  '.mobile-text': {
    display: 'none',
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    padding: '30px 30px 160px',
    '.mobile-text': {
      display: 'block',
    },
  },
});

export const ContentWrap = styled.div({
  width: '100%',
  maxWidth: '1400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const KeyWordWrap = styled.span(({ isTag }: { isTag: boolean }) => ({
  padding: '4px 8px',
  borderRadius: '2px',
  marginRight: isTag ? '8px' : '0px',
  color: isTag ? COLORS.primary.normal : COLORS.grayscale.gray8,
  backgroundColor: isTag ? COLORS.primary.alpha10 : 'transparent',
}));

export const SwitchButtonArea = styled.div({
  width: '110px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '40px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: '20px',
  },
});
