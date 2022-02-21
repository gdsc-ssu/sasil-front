import React, { useState } from 'react';

const Test = () => {
  const [test, setTest] = useState('');

  return (
    <button
      type="button"
      onClick={() => {
        setTest('qwer');
      }}
    >
      <span>{test}</span>
    </button>
  );
};

export default Test;
