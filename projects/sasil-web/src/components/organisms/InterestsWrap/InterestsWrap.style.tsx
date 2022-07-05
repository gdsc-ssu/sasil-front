import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export interface ButtonsWrapProps {
  inContent: boolean;
}

export const InterestsWrap = styled.div({
  width: '100%',
  height: '73px',
  backgroundColor: COLORS.background,
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 65px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: 'fit-content',
    height: '0px',
    backgroundColor: 'transparent',
    padding: '10px 0px',
  },
});

export const InterestButton = styled.button({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  '.like-count': {
    marginRight: '5px',
  },
});

export const WebTitle = styled.div({
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    display: 'none',
  },
});
