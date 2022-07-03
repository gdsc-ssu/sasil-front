import styled from '@emotion/styled';

import {
  TEXT_STYLES_PC,
  TEXT_STYLES_MOBILE,
  TextStyleName,
  COLORS,
} from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

interface WrapProps {
  fontColor?: string;
  backgroundColor?: string;
  isMini?: boolean;
  textStyleName: TextStyleName;
}

export const Wrap = styled.button(
  ({ fontColor, backgroundColor, textStyleName, isMini }: WrapProps) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px',
    border: 'none',
    width: isMini ? '81px' : '120px',
    height: isMini ? '33px' : '47px',
    padding: isMini ? '8px 16px 8px 16px' : '14px 32px 14px 32px',
    cursor: 'pointer',

    color: fontColor ?? COLORS.grayscale.white,
    backgroundColor: backgroundColor ?? COLORS.primary.normal,
    fontSize: isMini
      ? TEXT_STYLES_MOBILE[textStyleName].fontSize
      : TEXT_STYLES_PC[textStyleName].fontSize,
    fontWeight: isMini
      ? TEXT_STYLES_MOBILE[textStyleName].fontWeight
      : TEXT_STYLES_PC[textStyleName].fontWeight,
    lineHeight: isMini
      ? `${TEXT_STYLES_MOBILE[textStyleName].lineHeight}px`
      : `${TEXT_STYLES_PC[textStyleName].lineHeight}px`,

    [`@media ${MEDIA_QUERIES.mobile}`]: {
      fontSize: TEXT_STYLES_MOBILE[textStyleName].fontSize,
      fontWeight: TEXT_STYLES_MOBILE[textStyleName].fontWeight,
      lineHeight: `${TEXT_STYLES_MOBILE[textStyleName].lineHeight}px`,
    },
  }),
);
