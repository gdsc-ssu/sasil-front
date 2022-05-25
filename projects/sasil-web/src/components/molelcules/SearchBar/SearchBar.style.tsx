import styled from '@emotion/styled';

import { COLORS } from '@sasil/common';

export const StyledSearchBar = styled.form({
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
