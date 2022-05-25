import styled from '@emotion/styled';

import {
  TEXT_STYLES_MOBILE,
  TEXT_STYLES_PC,
  TEXT_STYLE_NAME,
} from '@sasil/common';

export const StyledTextInput = styled.input({
  width: '100%',
  height: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: TEXT_STYLES_PC[TEXT_STYLE_NAME.body1R].fontSize,
  fontWeight: TEXT_STYLES_PC[TEXT_STYLE_NAME.body1R].fontWeight,
  lineHeight: TEXT_STYLES_PC[TEXT_STYLE_NAME.body1R].lineHeight,

  '&:focus': {
    outline: 'none',
  },

  '@media screen and (max-width: 500px)': {
    fontSize: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.body1R].fontSize,
    fontWeight: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.body1R].fontWeight,
    lineHeight: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.body1R].lineHeight,
  },
});
