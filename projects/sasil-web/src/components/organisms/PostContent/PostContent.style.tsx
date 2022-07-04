import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { TEXT_STYLES_MOBILE, TEXT_STYLE_NAME } from '@sasil/common';

export const ContentWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '.title-text': {
    marginTop: '16px',
  },
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    '.title-text': {
      fontSize: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle1].fontSize,
    },
  },
});

export const IconWrap = styled.div({
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'none',
  },
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
