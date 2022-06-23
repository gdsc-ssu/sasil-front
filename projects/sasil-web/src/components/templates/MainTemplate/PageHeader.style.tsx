import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

export const StyledPageHeader = styled.div({
  width: '100%',
  height: '320px',
  display: 'flex',
  justifyContent: 'center',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    height: '180px',
    padding: '5px 21px 0 21px',
  },
});

export const ContentWrapper = styled.div({
  width: '100%',
  maxWidth: '1400px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const TopWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '90px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    marginTop: '10px',
    justifyContent: 'space-between',
  },
});

export const IconsWrapper = styled.div({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const WebLogoWrapper = styled.div({
  display: 'block',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'none',
  },
});

export const MobileLogoWrapper = styled.div({
  display: 'none',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
