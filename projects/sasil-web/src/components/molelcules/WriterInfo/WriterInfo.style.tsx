import styled from '@emotion/styled';

export const writerWrap = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const textWrap = styled.div({
  marginLeft: 4,
  overflow: 'hidden',

  '& > .writer-info': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
});
