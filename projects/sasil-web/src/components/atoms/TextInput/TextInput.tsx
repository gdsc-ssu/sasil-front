import React from 'react';

import * as styles from './TextInput.style';

export interface TextInputProps {
  placeholder?: string;
  className?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
