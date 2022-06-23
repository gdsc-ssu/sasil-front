import styled, { css } from '@emotion/native';
import { COLORS } from '@sasil/common';

interface StyledNavItemProps {
  isFocused: boolean;
}

export const StyledNavItem = styled.Pressable(
  ({ isFocused }: StyledNavItemProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    maxHeight: 59,
    borderTopWidth: 2,
    borderTopColor: isFocused ? COLORS.primary.normal : 'transparent',
  }),
);

export const IconWrap = styled.View({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  marginTop: 6,
  marginBottom: 3,
});

export const textWrap = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 9,
});
