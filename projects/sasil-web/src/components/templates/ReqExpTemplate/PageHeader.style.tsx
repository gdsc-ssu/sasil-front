import styled from '@emotion/styled';
import { COLORS, TEXT_STYLES_MOBILE } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

export const StyledPageHeader = styled.div({
  width: '100%',
  height: '320px',
  display: 'flex',
  justifyContent: 'center',
  padding: '30px 30px 39px 30px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    height: '180px',
    backgroundColor: COLORS.background,
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
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const IconsWrapper = styled.div({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '75px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'flex',
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
    display: 'block',
  },
});

export const TitleWrapper = styled.div({
  width: '300px',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  marginTop: '15px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '150px',
    marginTop: '18px',

    '& > .fixed-text-style': {
      fontSize: TEXT_STYLES_MOBILE.subtitle2B.fontSize,
      fontWeight: TEXT_STYLES_MOBILE.subtitle2B.fontWeight,
      lineHeight: `${TEXT_STYLES_MOBILE.subtitle2B.lineHeight}px`,
    },
  },
});

export const CategoryWrapper = styled.ul({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  margin: '15px 0 15px 0',

  '& > li': {
    marginRight: '8px',
    marginTop: '6px',
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    margin: '12px 0 10px 0',

    '& > li': {
      marginRight: '5px',
    },
  },
});

export const WriteButtonWrap = styled.div({
  // marginBottom: '32px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'none',
  },
});
