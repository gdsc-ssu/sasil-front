import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const EditorWrap = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  '.label-text': {
    marginTop: '16px',
  },
  '.title-input': {
    width: '100%',
    height: '60px',
    // borderBottom: `1px solid ${COLORS.grayscale.gray4}`,
    marginBottom: '10px',
    paddingLeft: '10px',
  },
  '.title-input::placeholder': {
    color: `${COLORS.grayscale.gray4}`,
  },
});

export const CategoriesWrap = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  margin: '20px 0px',

  '& > li': {
    marginRight: '8px',
  },
});

export const ButtonWrap = styled.div({
  width: '260px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '30px auto',

  '.cancel-btn': {
    backgroundColor: COLORS.grayscale.white,
    border: `1px solid ${COLORS.primary.normal}`,
    color: COLORS.primary.normal,
    padding: 0,
  },
});
