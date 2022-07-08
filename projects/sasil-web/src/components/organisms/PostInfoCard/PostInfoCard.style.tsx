import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const CreateInfoWrap = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0px 15px',
  '.create-date': {
    marginLeft: '5px',
  },
});

export const InterestsWrap = styled.div({
  display: 'flex',
  margin: '10px 0px',
  '.like-count': {
    marginRight: '5px',
  },
});
