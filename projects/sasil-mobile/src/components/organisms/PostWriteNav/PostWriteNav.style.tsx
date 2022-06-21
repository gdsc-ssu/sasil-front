import styled from '@emotion/native';
import { COLORS } from '@sasil/common';

export const Wrap = styled.View({
  alignItems: 'flex-end',
});

export const ItemIcon = styled.View({});

export const ListWrap = styled.View({
  width: 108,
  height: 88,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.grayscale.white,
  borderRadius: 5,
  marginBottom: 10,
});

export const ItemWrap = styled.View({
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
  color: string;
};
export const Button = styled.Pressable(({ color }: ButtonProps) => ({
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: `${color}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

type IconProps = {
  listOpened: Boolean;
};

export const Icon = styled.View(({ listOpened }: IconProps) => ({
  transform: listOpened ? [{ rotate: '45deg' }] : [],
}));
