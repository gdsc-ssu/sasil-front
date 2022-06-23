import styled from '@emotion/styled';

import {
  TEXT_STYLES_MOBILE,
  TEXT_STYLES_PC,
  TEXT_STYLE_NAME,
  TextStyleName,
} from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

interface StyledTextInputProps {
  textStyleName?: TextStyleName;
}

export const StyledTextInput = styled.input(
  ({ textStyleName = TEXT_STYLE_NAME.body1R }: StyledTextInputProps) => ({
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: TEXT_STYLES_PC[textStyleName].fontSize,
    fontWeight: TEXT_STYLES_PC[textStyleName].fontWeight,
    lineHeight: TEXT_STYLES_PC[textStyleName].lineHeight,

    '&:focus': {
      outline: 'none',
    },

    [`@media ${MEDIA_QUERIES.mobile}`]: {
      fontSize: TEXT_STYLES_MOBILE[textStyleName].fontSize,
      fontWeight: TEXT_STYLES_MOBILE[textStyleName].fontWeight,
      lineHeight: TEXT_STYLES_MOBILE[textStyleName].lineHeight,
    },
  }),
);
