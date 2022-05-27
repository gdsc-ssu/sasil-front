import React from 'react';
import styled from '@emotion/styled';

import { COLORS, TEXT_STYLES_PC, TextStyleName } from '@sasil/common';

export interface StyledTextProps {
  children: React.ReactNode;
  /** 텍스트 색 (인자를 지정해주지 않을 시, 기본값은 black) */
  color?: string;
  /** 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다. */
  textStyleName: TextStyleName;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

export const wrap = styled.div<StyledTextProps>((props) => ({
  color: props.color || COLORS.grayscale.black,
  fontSize: TEXT_STYLES_PC[props.textStyleName].fontSize,
  fontWeight: TEXT_STYLES_PC[props.textStyleName].fontWeight,
  lineHeight: `${TEXT_STYLES_PC[props.textStyleName].lineHeight}px`,
}));
