import React from 'react';
import styled from '@emotion/styled';

import { COLORS, TEXT_STYLES_PC, TextStyleName } from '@sasil/common';

export interface StyledTextProps {
  children: React.ReactNode;
  color?: string;
  textStyleName: TextStyleName;
  className?: string;
}

export const wrap = styled.div<StyledTextProps>((props) => ({
  color: props.color || COLORS.grayscale.black,
  fontSize: TEXT_STYLES_PC[props.textStyleName].fontSize,
  fontWeight: TEXT_STYLES_PC[props.textStyleName].fontWeight,
  lineHeight: `${TEXT_STYLES_PC[props.textStyleName].lineHeight}px`,
}));
