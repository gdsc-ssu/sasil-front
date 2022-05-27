import React from 'react';

import * as styles from './TextInput.style';

export interface TextInputProps {
  /** input의 placeholder 문자열 */
  placeholder?: string;
  /** input의 value 문자열 */
  value: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
  /** input의 입력값에 따른 변화를 컨트롤할 함수 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 기본 스타일이 적용된 input 요소를 생성하는 컴포넌트 (type=text)
 */
const TextInput = ({
  placeholder = '',
  className,
  value,
  onChange,
}: TextInputProps) => (
  <styles.StyledTextInput
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type="text"
  />
);

export default TextInput;
