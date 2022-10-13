import styled from '@emotion/styled';
import { TEXT_STYLES_MOBILE, TEXT_STYLE_NAME } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

interface CardProps {
  alignLeft: Boolean;
}

export const Card = styled.div(({ alignLeft }: CardProps) => ({
  width: '200px',
  height: '120px',
  margin: '7px',
  padding: '5px 12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: alignLeft ? 'flex-start' : 'flex-end',
  cursor: 'pointer',

  '>.title-text': {
    textAlign: 'right',
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '140px',
    height: '100px',
    margin: '4px',
    '& > .title-text': {
      fontSize: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle2B].fontSize,
      fontWeight: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle2B].fontWeight,
      lineHeight: `${
        TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle2B].lineHeight
      }px`,
    },
  },
}));
