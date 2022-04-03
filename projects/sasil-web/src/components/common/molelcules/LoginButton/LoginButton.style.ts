import styled from '@emotion/styled';

interface ButtonProps {
  backgroundColor: string;
}

export const Button = styled.button<ButtonProps>((props) => ({
  width: 354,
  height: 42,
  border: 'none',
  borderRadius: 8,
  background: props.backgroundColor,
  margin: 7,
  position: 'relative',
}));

export const iconWrap = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 16px;
`;

export const labelWrap = styled.div`
  margin: 0 auto;
`;
