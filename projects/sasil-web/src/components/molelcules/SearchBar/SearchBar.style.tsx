import styled from '@emotion/styled';

import { COLORS } from '@sasil/common';

export const styledSearchBar = styled.form({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '331px',
  height: '35px',
  maxWidth: '90%',
  backgroundColor: COLORS.background,
  border: `1px solid ${COLORS.grayscale.gray2}`,
  borderRadius: '5px',
  padding: '0 12px',
  boxSizing: 'border-box',
});

export const iconWrap = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '25px',
  height: '25px',
  padding: '0',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
});
