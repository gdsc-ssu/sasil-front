import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const HeaderWrap = styled.div({
  width: '100%',
  height: '320px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '30px 30px 52px 30px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    height: '114px',
    alignItems: 'center',
    padding: '56px 22px 25px',
    borderBottom: `1px solid ${COLORS.grayscale.gray2}`,
  },
});

export const MobileHeader = styled.div({
  display: 'none',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'block',
    width: '100%',

    '.mobile-search-bar': {
      width: '100%',
      maxWidth: '100%',
    },
  },
});

export const WebHeader = styled.div({
  width: '100%',
  maxWidth: '1390px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'none',
  },
});

export const IconWrap = styled.div({
  color: COLORS.primary.normal,
  marginBottom: '20px',
});

export const KeyWordWrap = styled.span(({ isTag }: { isTag: boolean }) => ({
  padding: '8px 12px',
  borderRadius: '8px',
  marginRight: isTag ? '8px' : '0px',
  color: isTag ? COLORS.primary.normal : COLORS.grayscale.gray8,
  backgroundColor: isTag ? COLORS.primary.alpha10 : 'transparent',
}));
