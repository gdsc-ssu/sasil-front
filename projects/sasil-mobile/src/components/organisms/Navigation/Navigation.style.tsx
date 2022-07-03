import styled from '@emotion/native';

interface StyledNavigationProps {
  paddingBottom?: number;
}

export const StyledNavigation = styled.View<StyledNavigationProps>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '3%',
  paddingRight: '3%',
  paddingBottom: props.paddingBottom,
}));
