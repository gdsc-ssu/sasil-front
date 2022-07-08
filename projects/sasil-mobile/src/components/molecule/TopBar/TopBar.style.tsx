import styled from '@emotion/native';

export const TOP_BAR_HEIGHT = 55;

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.View<ContainerProps>((props) => ({
  width: '100%',
  height: TOP_BAR_HEIGHT,
  backgroundColor: props.backgroundColor,
  paddingHorizontal: 20,
  paddingVertical: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const EmptyBox = styled.View({
  width: 24,
  height: 24,
});
