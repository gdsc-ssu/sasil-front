import styled from '@emotion/native';

interface ButtonProps {
  backgroundColor: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.Pressable<ButtonProps>((props) => ({
  width: 327,
  height: 42,
  borderRadius: 8,
  backgroundColor: props.backgroundColor,
  margin: 7,
  position: 'relative',
}));

export const labelWrap = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const iconWrap = styled.View`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 16px;
  top: 12px;
`;
