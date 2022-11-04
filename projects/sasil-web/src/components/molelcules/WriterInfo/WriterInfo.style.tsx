import styled from '@emotion/styled';

export const WriterWrap = styled.div({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  '.writer-info': {
    marginLeft: 6,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  '.create-date': {
    marginLeft: 6,
  },
});
