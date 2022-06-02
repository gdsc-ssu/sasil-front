import styled from '@emotion/styled';

interface StyledProfileImageProps {
  size: number;
}

export const StyledProfileImage = styled.img(
  ({ size }: StyledProfileImageProps) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
  }),
);
