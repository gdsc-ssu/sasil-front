import styled from '@emotion/native';

interface ButtonProps {
  backgroundColor: string;
}

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

export const iconWrap = styled.View({
  position: 'absolute',
  width: 18,
  height: 18,
  left: 16,
  top: 12,
});
