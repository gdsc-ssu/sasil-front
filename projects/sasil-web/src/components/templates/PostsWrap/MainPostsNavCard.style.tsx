import styled from '@emotion/styled';
import { TEXT_STYLES_MOBILE, TEXT_STYLE_NAME } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';
import { m } from 'framer-motion';

interface TitleProps {
  alignLeft: Boolean;
}

export const Title = styled.div(({ alignLeft }: TitleProps) => ({
  width: '200px',
  height: '120px',
  margin: '7px',
  padding: '5px 12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: alignLeft ? 'flex-start' : 'flex-end',

  '>.title-text': {
    textAlign: 'right',
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '140px',
    height: '100px',
    margin: '4px',
    // TODO StyledText 반응형 적용시 삭제 바람!
    '& > .title-text': {
      fontSize: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle2B].fontSize,
      fontWeight: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle2B].fontWeight,
      lineHeight: `${
        TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.subtitle2B].lineHeight
      }px`,
    },
  },
}));

export const Icon = styled.div({
  width: 24,
  height: 24,
});
