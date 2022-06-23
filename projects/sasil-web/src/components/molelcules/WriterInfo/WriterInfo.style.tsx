import styled from '@emotion/styled';

export const WriterWrap = styled.div({
  display: 'flex',
  alignItems: 'center',

  '& > .writer-info': {
    marginLeft: 4,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
});
