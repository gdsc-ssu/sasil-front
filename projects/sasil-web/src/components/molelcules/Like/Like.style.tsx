import styled from '@emotion/styled';

export const like = styled.div({
  display: 'flex',
  alignItems: 'center',

  '& > .like-count': {
    height: 16,
  },
});

export const iconWrap = styled.div({
  width: 16,
  height: 16,
  marginRight: 2,
});
