import styled from '@emotion/styled';

import {
  COLORS,
  TEXT_STYLES_PC,
  TEXT_STYLES_MOBILE,
  TextStyleName,
} from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

interface WrapProps {
  color?: string;
  /** 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다. */
  textStyleName: TextStyleName;
}

export const Wrap = styled.div(({ color, textStyleName }: WrapProps) => ({
  color: color ?? COLORS.grayscale.black,
  fontSize: TEXT_STYLES_PC[textStyleName].fontSize,
  fontWeight: TEXT_STYLES_PC[textStyleName].fontWeight,
  lineHeight: `${TEXT_STYLES_PC[textStyleName].lineHeight}px`,

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    fontSize: TEXT_STYLES_MOBILE[textStyleName].fontSize,
    fontWeight: TEXT_STYLES_MOBILE[textStyleName].fontWeight,
    lineHeight: `${TEXT_STYLES_MOBILE[textStyleName].lineHeight}px`,
  },

  '&.ellipsis': {
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));
