import styled from '@emotion/styled';

interface ButtonProps {
  border: string;
  color: string;
  backgroundColor: string;
}

const Button = styled.button<ButtonProps>((props) => ({
  width: '354px',
  height: '42px',
  border: props.border,
  borderRadius: '8px',
  color: props.color,
  fontSize: '14px',
  fontWeight: '600',
  background: props.backgroundColor,
}));

export default Button;
