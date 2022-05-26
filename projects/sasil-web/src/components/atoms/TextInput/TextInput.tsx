import React from 'react';

import * as styles from './TextInput.style';

export interface TextInputProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  placeholder = '',
  className,
  onChange,
}: TextInputProps) => (
  <styles.StyledTextInput
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    type="text"
  />
);

export default TextInput;
