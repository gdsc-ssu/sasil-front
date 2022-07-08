import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Template = styled.div({
  width: '884px',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: '130px 30px 0px',
});

export const Title = styled.div({
  height: '100%',
  marginBottom: '36px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  '.title-text': {
    marginTop: '16px',
  },
});

export const EditorWrap = styled.div({
  width: '100%',
});
