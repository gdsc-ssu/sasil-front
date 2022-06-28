import styled from '@emotion/styled';

import {
  TEXT_STYLES_PC,
  TEXT_STYLES_MOBILE,
  TextStyleName,
  COLORS,
} from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

interface WrapProps {
  color?: string;
  textStyleName: TextStyleName;
}

export const Wrap = styled.a(({ color, textStyleName }: WrapProps) => ({
  color: color ?? COLORS.grayscale.black,
  fontSize: TEXT_STYLES_PC[textStyleName].fontSize,
  fontWeight: TEXT_STYLES_PC[textStyleName].fontWeight,
  lineHeight: `${TEXT_STYLES_PC[textStyleName].lineHeight}px`,
  textDecoration: 'none',

  ':visited': {
    fill: 'inherit',
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    fontSize: TEXT_STYLES_MOBILE[textStyleName].fontSize,
    fontWeight: TEXT_STYLES_MOBILE[textStyleName].fontWeight,
    lineHeight: `${TEXT_STYLES_MOBILE[textStyleName].lineHeight}px`,
  },
}));
