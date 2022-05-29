import React, { useCallback, useState } from 'react';

export const useInputChange = <T extends HTMLInputElement>(
  initValue: string,
): [string, (e: React.ChangeEvent<T>) => void] => {
  const [value, setValue] = useState(initValue);

  const handleInputChange = useCallback((e: React.ChangeEvent<T>) => {
    setValue(e.target.value);
  }, []);

  return [value, handleInputChange];
};
