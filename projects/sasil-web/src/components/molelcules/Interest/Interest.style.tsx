import styled from '@emotion/styled';

interface WrapProps {
  size: number;
}

export const InterestWrap = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const IconWrap = styled.div(({ size }: WrapProps) => ({
  width: size,
  height: size,
  marginRight: 2,
}));
