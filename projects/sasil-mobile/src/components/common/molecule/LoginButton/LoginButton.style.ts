import styled from '@emotion/native';

interface ButtonProps {
  backgroundColor: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.Pressable<ButtonProps>((props) => ({
  width: 354,
  height: 42,
  elevation: 0,
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
  top: 28.57%;
  left: 4.89%;
`;
