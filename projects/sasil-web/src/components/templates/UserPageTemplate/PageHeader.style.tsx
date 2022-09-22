import styled from '@emotion/styled';
import { COLORS, TEXT_STYLES_MOBILE } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

interface SelectTabWrapperProps {
  tabType: 'userPosts' | 'bookmarkPosts';
}

export const StyledPageHeader = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '422px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    height: '290px',
    backgroundColor: COLORS.grayscale.white,
  },
});

export const ProfileWrapper = styled.div({
  paddingTop: '80px',
  paddingBottom: '36px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    paddingTop: '53px',
    paddingBottom: '19px',
  },

  '& > .userpage-profile-img': {
    [`@media ${MEDIA_QUERIES.mobile}`]: {
      width: '140px',
      height: '140px',
    },
  },
});

export const SelectTabWrapper = styled.div(
  ({ tabType }: SelectTabWrapperProps) => ({
    display: 'flex',
    alignItems: 'center',
    height: '52px',

    [`@media ${MEDIA_QUERIES.mobile}`]: {
      height: '35px',
    },

    '& > a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '164px',
      borderBottom: '2px solid',

      [`@media ${MEDIA_QUERIES.mobile}`]: {
        width: '130px',
        fontSize: TEXT_STYLES_MOBILE.body2B.fontSize,
        fontWeight: TEXT_STYLES_MOBILE.body2B.fontWeight,
        lineHeight: `${TEXT_STYLES_MOBILE.body2B.lineHeight}px`,
      },
    },

    '& > .tab-btn-userPosts': {
      borderBottomColor:
        tabType === 'userPosts'
          ? COLORS.primary.normal
          : COLORS.grayscale.gray4,
    },

    '& > .tab-btn-bookmarkPosts': {
      borderBottomColor:
        tabType === 'bookmarkPosts'
          ? COLORS.primary.normal
          : COLORS.grayscale.gray4,
    },
  }),
);
