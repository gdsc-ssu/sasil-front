import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from '@sasil/common';

export const styledNavBar = styled.div({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  left: '0',
  top: '0',
  width: '100%',
  height: '64px',
  padding: '0 34px',
  borderBottom: `1px solid ${COLORS.grayscale.gray3}`,

  '& > .menu_search-bar': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    height: '59px',
    top: 'unset',
    bottom: '0',
    padding: '0 16px',

    '& > .menu_search-bar': {
      display: 'none',
    },

    '& .menu_profile-img': {
      display: 'none',
    },
  },
});

export const sideMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '280px',
  height: '34px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '100%',
  },
});
