import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const styledTopBar = styled.header({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  height: '64px',
  padding: '0 34px',
  borderBottom: `1px solid ${COLORS.grayscale.gray3}`,

  '& > .search-bar': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export const sideMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '280px',
  height: '34px',
});
