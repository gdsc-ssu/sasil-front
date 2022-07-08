import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Bar = styled.div({
  width: '100%',
  height: '58px',
  backgroundColor: COLORS.background,
  borderRadius: '5px',
  padding: '0px 10px',
  display: 'flex',
  alignItems: 'center',
  overflow: 'scroll',
});

export const TagsWrap = styled.ul({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  '& > li': {
    marginRight: '10px',
  },
});
