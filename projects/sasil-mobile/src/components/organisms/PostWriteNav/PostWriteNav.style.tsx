import styled from '@emotion/native';
import { COLORS } from '@sasil/common';

export const Wrap = styled.View({
  display: 'flex',
  alignItems: 'flex-end',
});

export const NavList = styled.View({
  width: 108,
  height: 88,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.grayscale.white,
  borderRadius: 5,
  marginBottom: 10,
});

export const NavItem = styled.View({
  width: '80%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginVertical: 6,
});

export const IconWrap = styled.View({
  width: 22,
  height: 22,
});

type ButtonProps = {
  backgroundColor: string;
};
export const Button = styled.Pressable(({ backgroundColor }: ButtonProps) => ({
  width: 50,
  height: 50,
  borderRadius: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor,
}));

type ButtonIconProps = {
  listOpened: Boolean;
};

export const ButtonIcon = styled.View(({ listOpened }: ButtonIconProps) => ({
  transform: listOpened ? [{ rotate: '45deg' }] : [],
}));
