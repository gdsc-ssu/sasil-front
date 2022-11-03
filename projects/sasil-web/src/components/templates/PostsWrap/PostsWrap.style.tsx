import styled from '@emotion/styled';

export const Container = styled.section({
  maxWidth: '1400px',
  width: '100%',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',

  '.empty-notice': {
    paddingLeft: '10px',
  },
});
