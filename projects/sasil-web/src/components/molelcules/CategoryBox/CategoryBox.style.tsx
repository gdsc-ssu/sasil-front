import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

interface StyledCategoryBoxProps {
  isWithBackground?: boolean;
}

export const StyledCategoryBox = styled.li(
  ({ isWithBackground }: StyledCategoryBoxProps) => ({
    backgroundColor: isWithBackground
      ? COLORS.grayscale.white_opacity60
      : COLORS.primary.alpha10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '112px',
    height: '27px',
    borderRadius: '2px',
    padding: '4px 8px',
    listStyle: 'none',

    [`@media ${MEDIA_QUERIES.mobile}`]: {
      maxWidth: '82px',
      height: '21px',
      padding: '2px 4px',
    },
  }),
);
