import React, { useCallback } from 'react';

import { TextStyleName } from '@sasil/common';
import * as styles from './TextInput.style';

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** input의 value 문자열 */
  value: string;
  /** 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다. */
  textStyleName?: TextStyleName;
  /** input의 입력값에 따른 변화를 컨트롤할 함수 */
  onTextChange?: (text: string) => void | Promise<void>;
  /** 키보드의 key를 눌렀을 때 실행되는 이벤트 함수 */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * 기본 스타일이 적용된 input 요소를 생성하는 컴포넌트 (type=text)
 */
const TextInput = ({
  placeholder = '',
  value,
  textStyleName,
  onTextChange,
  onKeyDown,
  ...inputProps
}: TextInputProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      inputProps.onChange?.(e);
      onTextChange?.(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onTextChange, inputProps.onChange],
  );

  return (
    <styles.StyledTextInput
      placeholder={placeholder}
      value={value}
      textStyleName={textStyleName}
      type="text"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextInput;
