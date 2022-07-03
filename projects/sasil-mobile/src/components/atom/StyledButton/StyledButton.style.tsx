import styled from '@emotion/native';

import { TEXT_STYLES_MOBILE, TextStyleName } from '@sasil/common';

interface ButtonProps {
  backgroundColor?: string;
}

interface TextProps {
  fontColor?: string;
  textStyleName: TextStyleName;
}

export const ButtonWrap = styled.Pressable(
  ({ backgroundColor }: ButtonProps) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  }),
);

export const TextWrap = styled.Text(
  ({ fontColor, textStyleName }: TextProps) => ({
    color: fontColor,
    fontSize: TEXT_STYLES_MOBILE[textStyleName].fontSize,
    fontWeight: TEXT_STYLES_MOBILE[textStyleName].fontWeight,
    lineHeight: TEXT_STYLES_MOBILE[textStyleName].lineHeight,
  }),
);
