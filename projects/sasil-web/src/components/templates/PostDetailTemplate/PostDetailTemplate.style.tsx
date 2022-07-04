import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div({
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    height: '100vh',
    backgroundColor: COLORS.background,
    '.post-navbar': {
      display: 'none',
    },
  },
});

export const MobileNavBar = styled.div(({ isExp }: { isExp: boolean }) => ({
  display: 'none',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    height: '70px',
    backgroundColor: isExp ? 'transparent' : COLORS.grayscale.white,
    position: isExp ? 'absolute' : 'static',
    left: 0,
    top: 0,
  },
}));

export const IconWrap = styled.div({
  width: '24px',
  height: '24px',
});

export const ExperimentThumbnail = styled.div(
  ({ thumbnail }: { thumbnail: string }) => ({
    display: 'none',
    [`@media ${MEDIA_QUERIES.mobile}`]: {
      display: 'block',
      width: '100%',
      height: '215px',
      background: thumbnail
        ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${thumbnail})`
        : COLORS.background,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    },
  }),
);

export const TemplateWrap = styled.div({
  maxWidth: '950px',
  margin: '0px auto',
  padding: '130px 30px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  [`@media screen and (max-width: 900px)`]: {
    justifyContent: 'center',
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    flexDirection: 'column',
    padding: 0,
  },
});

export const SummaryWrap = styled.div({
  width: '240px',
  height: '100%',
  position: 'sticky',
  top: 120,

  [`@media screen and (max-width: 900px)`]: {
    display: 'none',
  },
});

export const MainContentWrap = styled.div({
  maxWidth: '620px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',

  [`@media screen and (max-width: 900px)`]: {
    margin: '0 auto',
    width: '100%',
    padding: 0,
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    backgroundColor: COLORS.background,
  },
});

export const InterestBoxWrap = styled.div({
  width: '100%',
  maxWidth: '70%',
  margin: '32px auto',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: 'fit-content',
    margin: '20px 0px 20px auto',
  },
});

export const Top = styled.div({
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    padding: '20px',
    backgroundColor: COLORS.grayscale.white,
  },
});

export const Bottom = styled.div({
  '.mobile-label': {
    display: 'none',
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    backgroundColor: COLORS.background,
    '.mobile-label': {
      display: 'block',
      padding: '20px 20px 0px',
    },
  },
});

export const ScrollArea = styled.div({
  display: 'none',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '100vw',
    display: 'flex',
    overflow: 'auto',
    margin: '20px 0px 20px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const PostCardsWrap = styled.div({
  padding: '0px 20px',
  display: 'flex',
  '.postcard': {
    width: '140px',
    marginRight: '10px',
  },
});
