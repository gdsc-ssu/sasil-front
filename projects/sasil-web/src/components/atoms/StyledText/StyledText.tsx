import React from 'react';

import { TextStyleName } from '@sasil/common';
import * as styles from './StyledText.style';

export interface StyledTextProps {
  children: React.ReactNode;
  /** 텍스트 색 (인자를 지정해주지 않을 시, 기본값은 black) */
  color?: string;
  /** 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다. */
  textStyleName: TextStyleName;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 주어진 인자를 바탕으로 style이 적용된 text를 생성하는 컴포넌트
 */
const StyledText = ({
  children,
  color,
  textStyleName,
  className,
}: StyledTextProps) => (
  <styles.wrap
    color={color}
    textStyleName={textStyleName}
    className={className}
  >
    {children}
  </styles.wrap>
);

export default StyledText;
