import styled from '@emotion/styled';

interface TitleProps {
  alignLeft: Boolean;
}

export const Title = styled.div(({ alignLeft }: TitleProps) => ({
  width: '200px',
  height: '120px',
  padding: '5px 12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: alignLeft ? 'flex-start' : 'flex-end',
  margin: '7px',
  // marginRight: '15px',
  // marginBottom: '15px',

  '>.title-text': {
    textAlign: 'right',
  },
}));

export const Icon = styled.div({
  width: 24,
  height: 24,
});
