import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

interface StyledPostHeaderProps {
  backgroundImg: string;
}

export const StyledPostHeader = styled.div(
  ({ backgroundImg }: StyledPostHeaderProps) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: '53%',
    padding: '12px 32px',
    borderRadius: '5px 5px 0 0',

    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',

    [`@media ${MEDIA_QUERIES.mobile}`]: {
      padding: '16px',
    },
  }),
);

export const CategoryWrapper = styled.ul({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  height: '27px',
  padding: 0,
  margin: 0,

  '& > li': {
    marginRight: '8px',
  },
});
