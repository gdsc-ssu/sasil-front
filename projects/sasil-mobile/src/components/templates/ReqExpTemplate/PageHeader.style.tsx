import styled, { css } from '@emotion/native';

export const StyledPageHeader = styled.View({
  width: '100%',
  height: 180,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingHorizontal: 15,
  marginBottom: 20,
});

export const TopWrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const IconsWrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 75,
});

export const TitleWrapper = styled.View({
  width: 150,
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'space-between',
  marginTop: 24,
  marginBottom: 18,
});

export const CategoryWrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: 250,
  maxHeight: 54,
  overflow: 'scroll',
});

export const categoryItem = css({
  marginRight: 5,
  marginBottom: 6,
});
