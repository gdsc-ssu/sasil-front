import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { TEXT_STYLES_MOBILE, TEXT_STYLE_NAME } from '@sasil/common';

export const ContentWrap = styled.div({
  position: 'relative', // for Dropdown Menu
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '.title-text': {
    marginTop: '16px',
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    position: 'static',
    '.title-text': {
      fontSize: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle1].fontSize,
    },
    '.post-menu': {
      display: 'none',
    },
  },
});

export const IconWrap = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'none',
  },
});

export const MenuIconWrap = styled.div({
  cursor: 'pointer',
  paddingRight: '10px',
});

export const CreateInfoWrap = styled.div({
  display: 'none',
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const CategoriesWrap = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  margin: '20px 0px',

  '& > li': {
    marginRight: '8px',
  },
});
